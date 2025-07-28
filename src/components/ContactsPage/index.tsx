import locationIcon from "../../imgs/icons/location_icon.png";
import phoneIcon from "../../imgs/icons/phone_icon.jpg";
import emailIcon from "../../imgs/icons/email_icon.jpg";
import instagramIcon from "../../imgs/icons/instagram_icon.svg";
import googleIcon from "../../imgs/icons/googleIcon.svg";

import FormContactPage from "../FormContactPage";

const ContactPage = () => {
  return (
    <>
      <h2 className="font-medium text-3xl text-center mb-10 mt-10">Зв’язатися з нами</h2>
      <div className="grid grid-cols-[600px_1fr] gap-20">
        <div className="mt-15">
          <section className="mt-10">
            <div className="flex items-center">
              <img src={locationIcon} alt="Наша локація" width={25} />
              <span className="ml-61">Україна</span>
            </div>
          </section>
          <section className="mt-10">
            <div className="flex items-center">
              <img src={phoneIcon} alt="Контакт для зв'язку з менеджером" width={25} />
              <span className="ml-52">+38(050)844-95-00</span>
            </div>
          </section>
          <section className="mt-10">
            <div className="flex items-center">
              <img src={emailIcon} alt="Електронна пошта для зв'язку з нами" width={25} />
              <span className="ml-47">info.vipkalyan@gmail.com</span>
            </div>
          </section>
          <hr className="h-1 mt-5 mb-5 border-gray-300" />
          <div className="flex gap-5 justify-center">
            <img src={instagramIcon} alt="" width={30} />
            <img src={googleIcon} alt="" width={20} />
          </div>
        </div>

        <div className="p-10 border-dashed border-4">
          <FormContactPage />
        </div>
      </div>
      <div>
        <iframe
        className="mt-10 w-full h-150"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.72981455673187!2d30.946496875878335!3d50.35850228082856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e96cc8992493%3A0x3fd1cb675f181538!2sL-Beauty!5e0!3m2!1sen!2sua!4v1753689051327!5m2!1sen!2sua"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
