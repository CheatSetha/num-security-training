"use client";
import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { BASE_URL } from "@/lib/baseUrl";
import Link from "next/link";

const CardCourse = ({ title, detail, courseID, sectionID }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");
  const [titles, setTitles] = React.useState(title);
  const [details, setDetails] = React.useState(detail);
  const [courseIDs, setCourseIDs] = React.useState(courseID);
  const [sectionIDs, setSectionIDs] = React.useState(sectionID);
  const [isHasNext, setIsHasNext] = React.useState(false);
  const [isHasPrevious, setIsHasPrevious] = React.useState(false);

  const handleOpen = (backdrop) => {
    setBackdrop(blur);
    onOpen();
  };

  const handleGoNextSection = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}courses/${courseIDs}/sections/${sectionIDs}/next`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    // check if response status is not found than
    if (response?.status === 404) {
      setIsHasNext(true);
      return;
    }

    setTitles(response?.sectionTitle);
    setDetails(response?.details);
    setSectionIDs(response?.sectionUUID);
    console.log(response, "next section");
  };

  const handleGoBackSection = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}courses/${courseIDs}/sections/${sectionIDs}/previous`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${data?.token}`,
        },
      }
    );
    const response = await data.json();
    // check if response status is not found than
    if (response?.status === 404) {
      setIsHasPrevious(true);
      return;
    } 
    setTitles(response?.sectionTitle);
    setDetails(response?.details);
    setSectionIDs(response?.sectionUUID);
  };
  return (
    <div className="w-full md:w-[290px] h-[200px] flex justify-between flex-col p-5 bg-white rounded-xl shadow">
      <h1 className="text-xl font-semibold text-start">{titles}</h1>
      <Link href={`/user/course/${courseIDs}/section/${sectionIDs}`}>
      <Button
       
        className="btn w-full h-10 bg-primary text-white"
      >
        <p className="text-xl text-white">Start</p>
      </Button>
      </Link>
      
      {/* <label
        htmlFor="modal-3"
        onPress={handleOpen}
        className="btn w-full h-10 bg-primary text-white"
      >
        <p className="text-xl text-white">Start</p>
      </label>
      <input className="modal-state" id="modal-3" type="checkbox" /> */}
      <div
        style={{
          width: "100%",
        }}
        className="modal "
      >
        <label className="modal-overlay"></label>
        <div className="modal-content flex flex-col gap-5 max-w-4xl">
          <label
            htmlFor="modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">{details && details.length > 0 ? details[0].title : 'Default Title'}</h2>
          <span>
            <iframe
              src="https://www.youtube.com/embed/Yvw5LaQEcm0"
              frameborder="0"
              allowfullscreen
              className="w-[700px] h-[400px]"
            />
          </span>
          <div className="flex gap-3">
            <Button onPress={handleGoBackSection} className="btn btn-error btn-block">Back</Button>
            <Button onPress={handleGoNextSection}  className="btn btn-block bg-primary">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
