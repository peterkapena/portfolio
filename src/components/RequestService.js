import React from "react";
import Button from "@material-ui/core/Button";
import { EmailOutlined } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

function rentMe() {
  window.location.href = "mailto:peterkapenapeter@gmail.com";
}

const RequestService = () => {
  const { t } = useTranslation();
  return (
    <Button
      //   style={{ marginBottom: "10px", fontWeight: "bold" }}
      variant="contained"
      color="primary"
      fullWidth
      startIcon={<EmailOutlined>send</EmailOutlined>}
      onClick={rentMe}
    >
      {t("profile.rentMe")}
    </Button>
  );
};

export default RequestService;
