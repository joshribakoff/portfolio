import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Layout from "../components/layout";

import bookingsCalendar from "./famefitness/bookings-calendar.png";
import classSchedule from "./famefitness/class-schedule.png";
import famefitBilling from "./famefitness/famefit-billing.png";
import famefitCal from "./famefitness/famefit-cal.png";
import famefitMeasure from "./famefitness/famefit-measure.png";
import famefitNewWeek from "./famefitness/famefit-new-week.png";
import famefitOverageNotification from "./famefitness/famefit-overage-notification.png";
import famefitPlan from "./famefitness/famefit-plan.png";
import famefitServices from "./famefitness/famefit-services.png";
import famefitServicesUsed from "./famefitness/famefit-services-used.png";
import famefitUserdash from "./famefitness/famefit-userdash.png";
import planActivate from "./famefitness/plan-activate.png";
import therapistAll from "./famefitness/therapist-all.png";
import therapistBooking1 from "./famefitness/therapist-booking1.png";
import therapistBooking2 from "./famefitness/therapist-booking2.png";
import therapistBooking3 from "./famefitness/therapist-booking3.png";
import therapistFiltered from "./famefitness/therapist-filtered.png";
import training from "./famefitness/training.png";
import weekView from "./famefitness/week-view.png";

const Page = styled.div`
  padding: 1.25rem 1rem;
`;

const Img = styled.img`
  max-width: 500px;
  border: 1px black solid;
`;

export default () => (
  <Layout>
    <a href="{bookingsCalendar}" target="_blank">
      <Img src={bookingsCalendar} />
    </a>
    <a href="{classSchedule}" target="_blank">
      <Img src={classSchedule} />
    </a>
    <a href="{famefitBilling}" target="_blank">
      <Img src={famefitBilling} />
    </a>
    <a href="{famefitCal}" target="_blank">
      <Img src={famefitCal} />
    </a>
    <a href="{famefitMeasure}" target="_blank">
      <Img src={famefitMeasure} />
    </a>
    <a href="{famefitNewWeek}" target="_blank">
      <Img src={famefitNewWeek} />
    </a>
    <a href="{famefitOverageNotification}" target="_blank">
      <Img src={famefitOverageNotification} />
    </a>
    <a href="{famefitPlan}" target="_blank">
      <Img src={famefitPlan} />
    </a>
    <a href="{famefitServices}" target="_blank">
      <Img src={famefitServices} />
    </a>
    <a href="{famefitServicesUsed}" target="_blank">
      <Img src={famefitServicesUsed} />
    </a>
    <a href="{famefitUserdash}" target="_blank">
      <Img src={famefitUserdash} />
    </a>
    <a href="{planActivate}" target="_blank">
      <Img src={planActivate} />
    </a>
    <a href="{therapistAll}" target="_blank">
      <Img src={therapistAll} />
    </a>
    <a href="{therapistBooking1}" target="_blank">
      <Img src={therapistBooking1} />
    </a>
    <a href="{therapistBooking2}" target="_blank">
      <Img src={therapistBooking2} />
    </a>
    <a href="{therapistBooking3}" target="_blank">
      <Img src={therapistBooking3} />
    </a>
    <a href="{therapistFiltered}" target="_blank">
      <Img src={therapistFiltered} />
    </a>
    <a href="{training}" target="_blank">
      <Img src={training} />
    </a>
    <a href="{weekView}" target="_blank">
      <Img src={weekView} />
    </a>
  </Layout>
);
