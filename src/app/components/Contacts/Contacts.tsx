"use client"
import React, { useState, useEffect } from "react";
import "./contact.css";
import { IContact } from "@/app/api/query/query";
import { useAddress, useContact } from "@/app/api/query/query";
import { useLanguage } from "@/app/context/LanguageContext";
import { Language } from "@/app/api/api";
import Link from "next/link";

const translations = {
  ru: {
    title: "Контакты",
    formTitle: "Несколько слов о вашем проекте",
    namePlaceholder: "Имя*",
    emailPlaceholder: "E-mail*",
    phonePlaceholder: "Телефон* (+998)",
    textPlaceholder: "Расскажите нам свою идею!",
    submitButton: "Отправить",
    sending: "Отправка...",
    errorMessage: "Произошла ошибка при отправке. Пожалуйста, попробуйте снова.",
    successMessage: "Ваше сообщение успешно отправлено!",
    contactsTitle: "Наши контакты",
    mapButton: "На карте",
    loading: "Загрузка...",
    error: "Произошла ошибка при загрузке данных."
  },
  en: {
    title: "Contacts",
    formTitle: "A few words about your project",
    namePlaceholder: "Name*",
    emailPlaceholder: "E-mail*",
    phonePlaceholder: "Phone* (+998)",
    textPlaceholder: "Tell us your idea!",
    submitButton: "Submit",
    sending: "Sending...",
    errorMessage: "An error occurred while sending. Please try again.",
    successMessage: "Your message has been sent successfully!",
    contactsTitle: "Our contacts",
    mapButton: "On map",
    loading: "Loading...",
    error: "An error occurred while loading data."
  }
};

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  
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
      const response = await fetch(`https://softium.uz/${language}/main_page/api/v1/contactUs/`, {
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
      <h3 className="contacts-block-form-title">{t.formTitle}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="contacts-form-name"
          placeholder={t.namePlaceholder}
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="contacts-form-email"
          placeholder={t.emailPlaceholder}
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone_number"
          className="contacts-form-phone"
          placeholder={t.phonePlaceholder}
          required
          value={formData.phone_number}
          onChange={handleChange}
        />
        <textarea
          name="text"
          id="form_idea"
          className="contacts-form-text"
          placeholder={t.textPlaceholder}
          value={formData.text}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contacts-form-btn" disabled={isSubmitting}>
          {isSubmitting ? t.sending : t.submitButton}
        </button>
      </form>
      {isError && (
        <div className="contacts-form-message error">
          {t.errorMessage}
        </div>
      )}
      {isSuccess && (
        <div className="contacts-form-message success">
          {t.successMessage}
        </div>
      )}
    </div>
  );
};

interface Address {
  address_name: string;
  address_url: string;
}

interface Contact {
  phone_number: string;
  email: string;
}

const ContactInfo = ({ addressData, contactData }: { addressData: Address[], contactData: Contact[] }) => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  
  return (
    <div className="contacts-block-numbers">
      <h3 className="contacts-block-numbers-title">{t.contactsTitle}</h3>
      <ul className="contacts-block-numbers-list">
        {contactData?.map((contact: Contact, index: number) => (
          <li key={`phone-${index}`}>
            <a href={`tel:${contact.phone_number.replace(/\s/g, "")}`}>
              {contact.phone_number}
            </a>
          </li>
        ))}

        {contactData?.map((contact: Contact, index: number) => (
          <li key={`email-${index}`}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        ))}

        {addressData?.map((address: Address, index: number) => (
          <React.Fragment key={`address-${index}`}>
            <li>{address.address_name}</li>
            <button type="button" className="contacts-form-btn-map">
            <Link href={address.address_url} >{t.mapButton}</Link>

            </button>
           
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};


const Contacts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  
  const { data: addressData, isLoading: isAddressLoading, isError: isAddressError } = useAddress(language as Language);
  const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContact(language as Language);

  if (isAddressLoading || isContactLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">{t.loading}</p>
      </div>
    );
  }

  if (isAddressError || isContactError) {
    return (
      <div className="error-container">
        <p className="error-text">{t.error}</p>
      </div>
    );
  }

  return (
    <main>
      <section className="contacts">
        <div className="container">
          <h1 className="contacts-title">{t.title}</h1>
          <div className="contacts-block">
            <div className="contacts-block-flex">
              <ContactForm />
              <ContactInfo addressData={addressData} contactData={contactData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
