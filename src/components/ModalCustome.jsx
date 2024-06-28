import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { BASE_URL } from "@/lib/baseUrl";

export default function MyModal({ cuuid, uuuid }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");
  const [isLoading, setIsLoading] = React.useState(false);

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop) => {
    setBackdrop("blur");
    onOpen();
  };
  const handleEnroll = async () => {
    setIsLoading(true);
    // fetch api to enroll user in course
    try {
      const res = await fetch(BASE_URL + `courses/${cuuid}/enroll/${uuuid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${data?.token}`,
        },
        // body: JSON.stringify({
        //   courseId: id,
        // }),
      });
      const response = await res.json();
      console.log(response, "response from enroll course");
      onClose();
      if (response.code === 200) {
        setShowModal(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "error in enroll course");
    }
  };

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <>
     
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Course Subscription
              </ModalHeader>
              <ModalBody>
                <p>
                  You must enroll in this course to view the content. Please
                  click the link below to enroll and gain access to the course
                  materials.
                </p>
              </ModalBody>
              <ModalFooter>
                <Link href="/resources">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                </Link>
                <Button
                //   onClick={handleEnroll()}
                  color="primary"
                  onPress={handleEnroll()}
                >
                  {isLoading ? "Enrolling..." : "Enroll"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
