interface SlickSettings {
  autoplay?: boolean;
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  prevArrow?: string;
  nextArrow?: string;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
      prevArrow?: string;
      nextArrow?: string;
      arrows?: boolean;
      infinite?: boolean;
      autoplay?: boolean;
    };
  }>;
  speed?: number;
  dots?: boolean;
  cssEase?: string;
  fade?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  swipe?: boolean;
  touchMove?: boolean;
  vertical?: boolean;
  verticalSwiping?: boolean;
  rtl?: boolean;
  centerMode?: boolean;
  centerPadding?: string;
  adaptiveHeight?: boolean;
  variableWidth?: boolean;
  rows?: number;
  slidesPerRow?: number;
  focusOnSelect?: boolean;
}

type SlickOptionValue = string | number | boolean;

interface JQuery {
  slick(options?: SlickSettings): JQuery;
  slick(command: 'unslick' | 'slickNext' | 'slickPrev' | 'slickPause' | 'slickPlay' | 'slickGoTo'): void;
  slick(command: 'slickGoTo', index: number): void;
  slick(command: 'slickSetOption', option: keyof SlickSettings, value: SlickOptionValue, refresh?: boolean): void;
} 