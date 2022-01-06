import React, { useState } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

function Form({ onValidated }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl isRequired>
        <Input
          height="64px"
          background="rgba(255, 255, 255, 0.08)"
          placeholder="Enter your email"
          borderRadius="90px"
          border="1px solid #FFFFFF4D"
          focusBorderColor="#03CB88"
          _hover={{
            border: "1px solid #8235FF",
          }}
          type="email"
          px="34px"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
      </FormControl>
      <Button
        mt="20px"
        borderRadius="16px"
        width="100%"
        height="64px"
        type="submit"
        background="#8235FF"
        color="white"
        _hover={{
          background: "#8235FF",
        }}
        _active={{
          background: "#03CB88",
        }}
      >
        Whitelist & get your advantages
      </Button>
    </form>
  );
}

export default function SubscribeForm() {
  return (
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <>
          <Form onValidated={(formData) => subscribe(formData)} />
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div style={{ color: "red" }}>
              Email address is invalid or already registered
            </div>
          )}
          {status === "success" && (
            <div style={{ color: "green" }}>Subscribed !</div>
          )}
        </>
      )}
    />
  );
}
