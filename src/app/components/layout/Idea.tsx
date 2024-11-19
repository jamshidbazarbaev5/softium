import { useContact } from "@/app/api/query/query";
import { IContact } from "@/app/api/query/query"; 

export default function Idea() {
    const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContact();

    if (isContactLoading) return <div>Loading...</div>;
    if (isContactError) return <div>Error loading contact data</div>;

    const buttonClick = () => {
        if (contactData && contactData.length > 1) {
            window.open(`https://t.me/${contactData[1].phone_number.replace(/[^0-9]/g, '')}`, '_blank');
        }
    }

    const getConsultation = () => {
        window.location.href = '/contact';
    }

    return (
        <section className="idea">
            <div className="container">
                <div className="idea-title" data-aos="fade-up" data-aos-duration="700">
                    <h1>Есть идеи?</h1>
                </div>
                <div className="idea-block">
                    <div className="idea-block-flex">
                        <div className="idea-block-flex-email">
                            {contactData && contactData.length > 0 && (
                                <>
                                    <a href={`mailto:${contactData[0].email}`} data-aos="fade-up" data-aos-duration="700">
                                        {contactData[0].email}
                                    </a>
                                    {contactData.length > 1 && (
                                        <a href={`mailto:${contactData[1].email}`} data-aos="fade-up" data-aos-duration="700">
                                            {contactData[1].email}
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="idea-block-flex-numbers">
                            {contactData && contactData.map((contact: IContact, index: number) => (
                                <a key={index} href={`tel:${contact.phone_number}`} data-aos="fade-up" data-aos-duration="700">
                                    {contact.phone_number}
                                </a>
                            ))}
                        </div>
                        <nav className="idea-block-flex-navi">
                            <button data-aos="fade-up" data-aos-duration="700" onClick={getConsultation}>Консультация</button>
                            <button data-aos="fade-up" data-aos-duration="700" onClick={buttonClick}>Позвонить</button>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}