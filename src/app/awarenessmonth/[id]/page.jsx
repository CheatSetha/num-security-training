import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-start font-semibold text-2xl md:text-4xl py-5 pt-12">How to Create a strong password in 7 easy steps</h1>
      <small className="text-primary  text-start">
        Posted on March 29 2024
      </small>
      <Image
        width={1200}
        height={1200}
        alt="thumnail image of password article"
        className="w-full rounded-lg py-5"
        src={"/assets/images/password.jpg"}
      />

      <div>
        <p className="font-bold text-xl text-primary pt-5 ">
          1. Do not use sequential numbers or letters
        </p>
        <p className="text-primary">
          1234, qwerty, jklm, 6789, etc., are some of the first passwords that
          bad actors will test.
        </p>
      </div>
      <div>
        <p className="font-bold text-xl text-primary pt-5 ">
          2. Do not include your birth year or birth month/day in your password
        </p>
        <p className="text-primary">
          Cyber criminals can easily find this information by snooping into your
          social media accounts.
        </p>
      </div>
      <div>
        <p className="font-bold text-xl text-primary pt-5">
          3. Use a combination of at least eight letters, numbers, and symbols
        </p>
        <p className="text-primary">
          The longer your password and the more character variety it uses, the
          harder it is to guess. For example, M0l#eb9Qv? combines upper- and
          lowercase letters, numbers, and symbols, making a unique and
          hard-to-guess password.
        </p>
      </div>
      <div>
        <p className="font-bold text-xl text-primary pt-5">
          4. Combine different unrelated words in your password or passphrase
        </p>
        <p className="text-primary">
          This practice makes it difficult for cyber criminals to guess your
          password. Do not use phrases from popular songs, movies, or television
          shows. Use three or four longer words to create your passphrase. For
          example, 9Sp!dErscalKetobogGaN.
        </p>
      </div>
      <div>
        <p className="font-bold text-xl text-primarypt-5 ">
          5. Do not use names or words found in the dictionary
        </p>
        <p className="text-primary">
          Substitute letters with numbers or symbols to make it difficult to
          guess the password. Or deliberately use spelling errors in the
          password or passphrase. For example, P8tty0G#5dn for “patio garden.”
        </p>
      </div>
      <div>
        <p className="font-bold text-xl text-primary pt-5">
          6. Use a password manager to store your passwords
        </p>
        <p className="text-primary">
          Do not write your passwords or keep them in a document on your
          computer. Ensure you are using the password manager tool the
          IT/support team provided to store all professional and personal
          passwords. Additionally, never share your passwords with anyone. This
          includes your colleagues, the IT/support team, customer
          service/helpdesk personnel, family members, and friends.
        </p>
      </div>
      <div className="pb-10">
        <p className="font-bold text-xl text-primary pt-5 ">
          7. Do not reuse your passwords
        </p>
        <p className="text-primary">
          Every device, application, website, and software requires a unique and
          strong password or PIN. Remember, if a cyber criminal does guess one
          of your passwords, they will use this to attempt to hack into all of
          your personal and professional accounts.
        </p>
      </div>
    </div>
  );
};

export default page;
