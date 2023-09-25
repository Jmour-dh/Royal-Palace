import React, { useEffect, useState } from "react";
import styles from "./Mycalendar.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { createReserve } from "../../../../apis/reserver";


function MyCalendar() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    dateIn: yup.date().required("Date in is required").nullable(),
    dateOut: yup
      .date()
      .min(yup.ref("dateIn"), "Date out must be at least one day after date in")
      .required("Date out is required")
      .nullable(),
    adulte: yup.number().required("Il faut préciser le nombre d'adulte"),
    enfant: yup.number().required("Il faut préciser le nombre d'adulte"),
    chambre: yup.string().required("Il faut préciser choisit"),
    check: yup.string().required("il faut accépter"),
  });

  const initialValues = {
    dateIn: "",
    dateOut: "",
    adulte: "",
    enfant: "",
    chambre: "",
    check: "",
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

  const submit = handleSubmit(async (reserve) => {
    try {
      clearErrors();
      // Obtenez l'ID de l'utilisateur depuis le cookie
      // const user_id = Cookies.get(user.id); // Assurez-vous que 'user_id' correspond au nom du cookie que vous utilisez
      // reserve.user_id = user_id; // Assurez-vous que votre base de données utilise "user_id"
      await createReserve(reserve);
      navigate("/profile");
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

 

  return (
    <div className={styles.homeReser}>
      <div className={styles.calendar}>
        <div className={styles.reser}>
          <h4>Réservation</h4>
        </div>
        <form onSubmit={submit}>
        {/* <input type="number" name="user_id" value={user_id} /> */}

          <div className={styles.entree}>
            <label>Date d'entrée</label>
          </div>

          <input
            className={styles.date - 1}
            type="date"
            name="dateIn"
            {...register("dateIn")}
          />
          {/* {errors.dateIn && (
            <p className="form-error">{errors.dateIn.message}</p>
          )} */}
          <div className={styles.sorti}>
            <label>Date de sorti</label>
            <input
              className={styles.date - 2}
              type="date"
              name="dateOut"
              {...register("dateOut")}
            />
            {/* {errors.dateOut && (
              <p className="form-error">{errors.dateOut.message}</p>
            )} */}
          </div>

          <div className={styles.adult}>
            <label className={styles.adult}>Adulte</label>
            <input type="number" name="adulte" {...register("adulte")} />
            {/* {errors.adulte && (
              <p className="form-error">{errors.adulte.message}</p>
            )} */}
          </div>

          <div className={styles.enfant}>
            <label>Enfant</label>
            <input type="number" name="enfant" {...register("enfant")} />
            {/* {errors.enfant && (
              <p className="form-error">{errors.enfant.message}</p>
            )} */}
            <div className={styles.select}>
              <label for="select">Chambre</label>
              <select id="chambre" name="chambre" {...register("chambre")}>
                <option value="Chambre Double Standard">
                  Chambre Double Standard
                </option>
                <option value="Chambre Double Supérieure">
                  Chambre Double Supérieure
                </option>
                <option value="Chambre Double Deluxe">
                  Chambre Double Deluxe
                </option>
                <option value="Chambre VIP">Chambre VIP</option>
              </select>
              {/* {errors.chambre && (
                <p className="form-error">{errors.chambre.message}</p>
              )} */}
            </div>

            <div className={styles.check}>
              <input type="checkbox" name="check" {...register("check")} />
              <label className={styles.check}>J'accepte</label>
              {/* {errors.check && (
                <p className="form-error">{errors.check.message}</p>
              )} */}
            </div>
          </div>
          {/* {errors.generic && (
            <div className="mb-10">
              <p className="form-error">{errors.generic.message}</p>
            </div>
          )} */}
          <button disabled={isSubmitting}>Reserver</button>
        </form>
      </div>
    </div>
  );
}

export default MyCalendar;
