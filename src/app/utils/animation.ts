interface Cell {
  x: number;
  y: number;
  r: number;
  col: number;
  row: number;
  xv: number;
  yv: number;
  pressure: number;
  up?: Cell;
  down?: Cell;
  left?: Cell;
  right?: Cell;
  up_left?: Cell;
  up_right?: Cell;
  down_left?: Cell;
  down_right?: Cell;
}

interface Particle {
  x: number;
  y: number;
  px: number;
  py: number;
  xv: number;
  yv: number;
}

declare global {
  interface Window {
    noise: () => void;
    makeGreenParticles: () => void;
    Fluid: {
      initialize: () => void;
    };
    draw: () => void;
    noiseFrameId: number;
    drawFrameId: number;
    startNoise: () => void;
    stopNoise: () => void;
    requestAnimationFrame: (callback: FrameRequestCallback) => number;
    webkitRequestAnimationFrame?: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame?: (callback: FrameRequestCallback) => number;
  }
}

export const initAnimation = (jquery: JQuery): void => {
  (function ($) {
    const noise = () => {
      let a: HTMLCanvasElement,
          b: CanvasRenderingContext2D,
          c: number,
          d: number;
      const e: ImageData[] = [];
      let f = 0,
          g: number;


      const h = () => {
        const p = b.createImageData(c, d),
          q = new Uint32Array(p.data.buffer),
          r = q.length;
        for (let s = 0; s < r; s++) {
          if (0.5 > Math.random()) {
            q[s] = 4278190080;
          }
        }
        e.push(p);
      };

      const j = () => {
        f = (f + 1) % 10;
        b.putImageData(e[f], 0, 0);
      };

      const k = () => {
        j();
        g = window.setTimeout(() => {
          window.noiseFrameId = window.requestAnimationFrame(k);
        }, 40);
      };

      const l = () => {
        c = window.innerWidth;
        d = window.innerHeight;
        a.width = c;
        a.height = d;
        for (let p = 0; 10 > p; p++) h();
        k();
      };

      (() => {
        a = document.getElementById("noise_sec") as HTMLCanvasElement;
        b = a.getContext("2d")!;
        l();
      })();
    };

    window.noise = noise;

    function makeGreenParticles() {
      (function (w: Window) {
        let canvas: HTMLCanvasElement,
            ctx: CanvasRenderingContext2D;
            
        const mouse = {
          x: 0,
          y: 0,
          px: 0,
          py: 0,
          down: true,
        };

        const canvas_width = 1900;
        const canvas_height = 1000;
        const resolution = 100;
        const pen_size = 50;
        const num_cols = canvas_width / resolution;
        const num_rows = canvas_height / resolution;
        const speck_count = 4000;
        const vec_cells: Cell[][] = [];
        const particles: Particle[] = [];

        function cell(x: number, y: number, res: number): Cell {
          return {
            x,
            y,
            r: res,
            col: 0,
            row: 0,
            xv: 0,
            yv: 0,
            pressure: 0,
          };
        }

        function particle(x: number, y: number): Particle {
          return {
            x,
            y,
            px: x,
            py: y,
            xv: 0,
            yv: 0,
          };
        }

        function init() {
          canvas = document.getElementById("c") as HTMLCanvasElement;
          ctx = canvas.getContext("2d")!;
          canvas.width = canvas_width;
          canvas.height = canvas_height;

          // Initialize particles
          for (let i = 0; i < speck_count; i++) {
            particles.push(
              particle(
                Math.random() * canvas_width,
                Math.random() * canvas_height
              )
            );
          }

          // Initialize grid
          for (let col = 0; col < num_cols; col++) {
            vec_cells[col] = [];
            for (let row = 0; row < num_rows; row++) {
              const cell_data = cell(
                col * resolution,
                row * resolution,
                resolution
              );
              vec_cells[col][row] = cell_data;
              vec_cells[col][row].col = col;
              vec_cells[col][row].row = row;
            }
          }

          // Set up grid connections
          for (let col = 0; col < num_cols; col++) {
            for (let row = 0; row < num_rows; row++) {
              const cell_data = vec_cells[col][row];
              const row_up = row - 1 >= 0 ? row - 1 : num_rows - 1;
              const col_left = col - 1 >= 0 ? col - 1 : num_cols - 1;
              const col_right = col + 1 < num_cols ? col + 1 : 0;

              const up = vec_cells[col][row_up];
              const left = vec_cells[col_left][row];
              const up_left = vec_cells[col_left][row_up];
              const up_right = vec_cells[col_right][row_up];

              cell_data.up = up;
              cell_data.left = left;
              cell_data.up_left = up_left;
              cell_data.up_right = up_right;
              up.down = cell_data;
              left.right = cell_data;
              up_left.down_right = cell_data;
              up_right.down_left = cell_data;
            }
          }

          canvas.addEventListener("mousemove", mouse_move_handler);
          w.onload = draw;
          w.draw = draw;
        }

        function update_particle() {
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (
              p.x >= 0 &&
              p.x < canvas_width &&
              p.y >= 0 &&
              p.y < canvas_height
            ) {
              const col = parseInt((p.x / resolution).toString());
              const row = parseInt((p.y / resolution).toString());
              const cell_data = vec_cells[col][row];
              const ax = (p.x % resolution) / resolution;
              const ay = (p.y % resolution) / resolution;

              p.xv += (1 - ax) * cell_data.xv * 0.05;
              p.yv += (1 - ay) * cell_data.yv * 0.05;
              if (cell_data.right) {
                p.xv += ax * cell_data.right.xv * 0.05;
                p.yv += ax * cell_data.right.yv * 0.05;
              }
              if (cell_data.down) {
                p.xv += ay * cell_data.down.xv * 0.05;
                p.yv += ay * cell_data.down.yv * 0.05;
              }
              p.x += p.xv;
              p.y += p.yv;

              const dx = p.px - p.x;
              const dy = p.py - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const limit = Math.random() * 0.5;

              if (dist > limit) {
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.px, p.py);
                ctx.stroke();
              } else {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + limit, p.y + limit);
                ctx.stroke();
              }

              p.px = p.x;
              p.py = p.y;
            } else {
              p.x = p.px = Math.random() * canvas_width;
              p.y = p.py = Math.random() * canvas_height;
              p.xv = 0;
              p.yv = 0;
            }

            p.xv *= 0.5;
            p.yv *= 0.5;
          }
        }

        function draw() {
          const mouse_xv = mouse.x - mouse.px;
          const mouse_yv = mouse.y - mouse.py;

          for (let i = 0; i < vec_cells.length; i++) {
            const cell_datas = vec_cells[i];
            for (let j = 0; j < cell_datas.length; j++) {
              const cell_data = cell_datas[j];
              if (mouse.down) {
                change_cell_velocity(cell_data, mouse_xv, mouse_yv, pen_size);
              }
              update_pressure(cell_data);
            }
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = "rgba(36, 184, 175, 1)";
          update_particle();

          for (let i = 0; i < vec_cells.length; i++) {
            const cell_datas = vec_cells[i];
            for (let j = 0; j < cell_datas.length; j++) {
              const cell_data = cell_datas[j];
              update_velocity(cell_data);
            }
          }

          mouse.px = mouse.x;
          mouse.py = mouse.y;
          window.drawFrameId = requestAnimationFrame(draw);
        }

        function change_cell_velocity(
          cell_data: Cell,
          mvelX: number,
          mvelY: number,
          pen_size: number
        ) {
          const dx = cell_data.x - mouse.x;
          const dy = cell_data.y - mouse.y;
          const dist = Math.sqrt(dy * dy + dx * dx);

          if (dist < pen_size) {
            const power = pen_size / Math.max(dist, 4);
            cell_data.xv += mvelX * power;
            cell_data.yv += mvelY * power;
          }
        }

        function update_pressure(cell_data: Cell) {
          const pressure_x =
            (cell_data.up_left?.xv ?? 0) * 0.5 +
            (cell_data.left?.xv ?? 0) +
            (cell_data.down_left?.xv ?? 0) * 0.5 -
            (cell_data.up_right?.xv ?? 0) * 0.5 -
            (cell_data.right?.xv ?? 0) -
            (cell_data.down_right?.xv ?? 0) * 0.5;

          const pressure_y =
            (cell_data.up_left?.yv ?? 0) * 0.5 +
            (cell_data.up?.yv ?? 0) +
            (cell_data.up_right?.yv ?? 0) * 0.5 -
            (cell_data.down_left?.yv ?? 0) * 0.5 -
            (cell_data.down?.yv ?? 0) -
            (cell_data.down_right?.yv ?? 0) * 0.5;

          cell_data.pressure = (pressure_x + pressure_y) * 0.25;
        }

        function update_velocity(cell_data: Cell) {
          cell_data.xv +=
            ((cell_data.up_left?.pressure ?? 0) * 0.5 +
              (cell_data.left?.pressure ?? 0) +
              (cell_data.down_left?.pressure ?? 0) * 0.5 -
              (cell_data.up_right?.pressure ?? 0) * 0.5 -
              (cell_data.right?.pressure ?? 0) -
              (cell_data.down_right?.pressure ?? 0) * 0.5) *
            0.25;

          cell_data.yv +=
            ((cell_data.up_left?.pressure ?? 0) * 0.5 +
              (cell_data.up?.pressure ?? 0) +
              (cell_data.up_right?.pressure ?? 0) * 0.5 -
              (cell_data.down_left?.pressure ?? 0) * 0.5 -
              (cell_data.down?.pressure ?? 0) -
              (cell_data.down_right?.pressure ?? 0) * 0.5) *
            0.25;

          cell_data.xv *= 0.99;
          cell_data.yv *= 0.99;
        }

        function mouse_move_handler(e: MouseEvent) {
          mouse.px = mouse.x;
          mouse.py = mouse.y;
          mouse.x = e.offsetX || e.layerX;
          mouse.y = e.offsetY || e.layerY;
        }

        w.Fluid = {
          initialize: init,
        };
      })(window);
    }

    window.makeGreenParticles = makeGreenParticles;

    window.startNoise = function () {
      window.noise();
      window.makeGreenParticles();
      window.Fluid.initialize();
      window.draw();
    };

    window.stopNoise = function () {
      cancelAnimationFrame(window.noiseFrameId);
      cancelAnimationFrame(window.drawFrameId);
    };
  })($);
};