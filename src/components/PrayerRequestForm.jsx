import React from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const PrayerRequestForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = new URLSearchParams(formData).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });
      // Redirect to thank you page on success
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mt: 0,
          border: 1,
          borderColor: "#cbd5e0",
          fontFamily: '"Noto Sans", serif',
          "& .MuiTypography-root": {
            fontFamily: '"Noto Sans", serif',
            color: "black",
            fontSize: "15px",
          },
          "& .MuiInputBase-root": {
            fontFamily: '"Noto Sans", serif',
            fontSize: "15px",
          },
          "& .MuiButton-root": {
            fontFamily: '"Noto Sans", serif',
            fontSize: "15px",
          },
        }}
      >
        <form
          name="prayer-request"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={handleSubmit}
        >
          {/* Hidden input for Netlify Forms */}
          <input type="hidden" name="form-name" value="prayer-request" />
          {/* Honeypot field */}
          <Box sx={{ display: "none" }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </Box>

          {/* Prayer Request Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              ¿Cómo podemos orar por ti?*
            </Typography>
            <TextField
              id="prayerRequest"
              name="prayerRequest"
              required
              multiline
              rows={4}
              fullWidth
              placeholder="Ingresa tu petición de oración aquí..."
            />
          </Box>

          {/* Contact Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Información de Contacto
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                id="firstName"
                name="firstName"
                label="Primer Nombre"
                required
                fullWidth
                placeholder="Primer Nombre"
              />
              <TextField
                id="lastName"
                name="lastName"
                label="Apellido"
                required
                fullWidth
                placeholder="Apellido"
              />
              <TextField
                id="email"
                name="email"
                label="Correo Electrónico"
                type="email"
                required
                fullWidth
                placeholder="Correo Electrónico"
              />
              <TextField
                id="phone"
                name="phone"
                label="Número de Teléfono"
                type="tel"
                required
                fullWidth
                placeholder="Número de Teléfono"
              />
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{
              bgcolor: "#c13636",
              "&:hover": {
                bgcolor: "main",
                opacity: 0.9,
              },
            }}
          >
            Enviar Petición
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PrayerRequestForm;
