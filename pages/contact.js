import { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";

const Forms = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq1m0ho",
        "contact_form",
        e.target,
        "R1PEo1p9oXka6IBcz"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }



  return (
    <>
      <div className={styles.tokyo_tm_contact}>
        <div className={styles.tokyo_tm_title}>
          <div className={styles.title_flex}>
            <div className={styles.left}>
              <span>Contact + Commissions</span>
              <h3>Get in Touch</h3>
              <h8>Interested in commission? Let's get in touch!</h8>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className={styles.fields}>
          <form onSubmit={sendEmail}>
            <div className={styles.first}>
              <ul>
                <li>
                  <input type="text" name="from_name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Best Email to reach you"
                  />
                </li>
                {/* END EMAIL */}

                <li>
                  <input type="text" name="from_subject" placeholder="Subject" />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Shoot us an email and we will get back to you as soon as possible :)"
                  ></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className={styles.tokyo_tm_button}>
              <button type="submit" className={styles.ib_button}>
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>

        {/* END FIELDS */}
      </div>
    </>
  );
};

const ClosedComissions = () => {
  return (
    <>
     

      <div class="mt-48 text-center font-family: Poppins">
        <h1 class=" text-2xl text-gray-900 md:text-4xl lg:text-2xl dark:text-grey mb-10">
          Commissions are CLOSED
        </h1>
        <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 font-light">
          Hi! We are excited to announce that we are accepting commission orders
          on:
        </p>
        <p class="dark:text-grey text-gray-900 mb-4  text-sm break-normal">
          March 17th <br/>
          Friday <br/>
          12 PM EST
        </p>
        <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 font-light">
          Please note: we conduct a limited First Come, First Serve basis. If
          you did not make your order on time, you will be placed in our
          Waitlist.
        </p>
        <p class="text-sm font-normal text-black-500 dark:text-gray-400 font-light">
          For inquiries, please email us at <a text-gray-200 href="mailto:atozstudio2023@gmail.com">atozstudio2023@gmail.com</a>
        </p>
      </div>
    </>
  );
};

const Absence = () => {
  const [showForm, setShowForm] = useState(true);

  return <>{showForm ? <Forms /> : <ClosedComissions />}</>;
};

export default Absence;
