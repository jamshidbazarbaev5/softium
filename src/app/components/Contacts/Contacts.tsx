"use client"
import React, { useState, useEffect } from "react";
import "./contact.css";
import { IContact } from "@/app/api/query/query";

const ContactForm = () => {
  const [formData, setFormData] = useState<IContact>({
    name: "",
    email: "",
    phone_number: "",
    text: "",
  });

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone_number') {
      const formattedValue = value.startsWith('+998') ? value : '+998' + value.replace(/\D/g, '');
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://softium.uz/en/main_page/api/v1/contactUs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        text: "",
      });
      
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="contacts-block-form">
      <h3 className="contacts-block-form-title">
        Несколько слов о вашем проекте
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="contacts-form-name"
          placeholder="Имя*"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="contacts-form-email"
          placeholder="E-mail*"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone_number"
          className="contacts-form-phone"
          placeholder="Телефон* (+998)"
          required
          value={formData.phone_number}
          onChange={handleChange}
        />
        <textarea
          name="text"
          id="form_idea"
          className="contacts-form-text"
          placeholder="Расскажите нам свою идею!"
          value={formData.text}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contacts-form-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
      {isError && (
        <div className="contacts-form-message error">
          Произошла ошибка при отправке. Пожалуйста, попробуйте снова.
        </div>
      )}
      {isSuccess && (
        <div className="contacts-form-message success" style={{animation: "fadeOut 3s forwards"}}>
          Ваше сообщение успешно отправлено!
        </div>
      )}
    </div>
  );
};

const ContactInfo = () => (
  <div className="contacts-block-numbers">
    <h3 className="contacts-block-numbers-title">Наши контакты</h3>
    <ul className="contacts-block-numbers-list">
      {["+998 99 999 99 99", "+998 99 999 99 99", "+998 99 999 99 99"].map(
        (number, index) => (
          <li key={index}>
            <a href={`tel:${number.replace(/\s/g, "")}`}>{number}</a>
          </li>
        )
      )}
      {["info@softium.com", "info@softium.com"].map((email, index) => (
        <li key={index}>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      ))}
      <li>Узбекистан, Нукус</li>
      <li>ул. А. Досназарова, 230100</li>
      <li>SOFTIUM WEB STUDIO</li>
    </ul>
  </div>
);

const Contacts: React.FC = () => {
  return (
    <main>
      <section className="contacts">
        <div className="container">
          <h1 className="contacts-title">Контакты</h1>
          <div className="contacts-block">
            <div className="contacts-block-flex">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
