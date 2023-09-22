import React from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createContact} from "../../../apis/contacts";

function Contact() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    lname: yup
      .string()
      .required("Il faut préciser votre nom")
      .min(2, "Un vrai nom"),
    email: yup
      .string()
      .required("Il faut préciser votre email")
      .email("L'email n'est pas valide"),
    phone: yup.string()
     .required("Il faut préciser votre numéro de téléphone"),
    // .matches(
    //   /^\+(?:[0-9] ?){6,10}[0-9]$/,
    //   "Le numéro de téléphone n'est pas valide. Il doit commencer par '+' suivi de 6 à 14 chiffres."
    // ),
    msg: yup
      .string()
      .required("Il faut préciser votre message")
      .min(6, "Il faut un message explicatif")
      .max(100, "Il faut un message de 100 caractères"),
  });

  const initialValues = {
    name: "",
    lName: "",
    email: "",
    phone: "",
    msg: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (contact) => {
    try {
      clearErrors();
      await createContact(contact);
      navigate("/");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className={styles.contact}>
      <h1>laissez-nous vous contacter</h1>
      <div className="ctc">
        <div className={styles.contLeft}>
          <div className={styles.phone}>
            <h3>Applez-nous 24h/24 et 7j/7 sans frais</h3>
            <span>00 800 49 12 90 54</span>
          </div>
          <div className={styles.phone}>
            <h3>Email inquiries</h3>
            <p>
              Pour toute question concernant les réservations, veuillez envoyer
              un e-mail à res@royalpalacehotels.com
            </p>
          </div>
          <div className={styles.phone}>
            <h3>Meetings & events </h3>
            <p>
              Envoyez vos demandes par e-mail à res@royalpalacehotls.com ou
              appelez-nous au +49 (0)30-884 940 040
            </p>
          </div>
        </div>
        <div className={styles.contRight}>
          <form
            onSubmit={submit}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <input
              className="mb-20"
              type="text"
              name="name"
              placeholder="Entrez votre nom de famille..."
              {...register("name")}
            />
            {errors.name && <p className="form-error">{errors.name.message}</p>}
            <input
              className="mb-20"
              type="text"
              name="lname"
              placeholder="Entrez votre prénom..."
              {...register("lname")}
            />
            {errors.lname && (
              <p className="form-error">{errors.lname.message}</p>
            )}
            <input
              className="mb-20"
              type="text"
              name="email"
              placeholder="Entrez votre mail..."
              {...register("email")}
            />
            {errors.email && (
              <p className="form-error">{errors.email.message}</p>
            )}
            <input
              className="mb-20"
              type="number"
              name="phone"
              placeholder="Entrez votre numéro de téléphone..."
              {...register("phone")}
            />
            {errors.phone && (
              <p className="form-error">{errors.phone.message}</p>
            )}
            <textarea
              id="msg"
              type="text"
              name="msg"
              placeholder="Ecrivez votre message..."
              {...register("msg")}
            />
            {errors.msg && <p className="form-error">{errors.msg.message}</p>}

            {errors.generic && (
              <div className="mb-10">
                <p className="form-error">{errors.generic.message}</p>
              </div>
            )}
            <div className="d-flex justify-content-center ">
              <button disabled={isSubmitting} className="btn btn-primary  m-10">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
