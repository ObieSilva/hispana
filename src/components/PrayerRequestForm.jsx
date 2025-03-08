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

    try {
      // Use the Netlify Forms endpoint directly
      const response = await fetch("/.netlify/forms/prayer-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        // Show success message
        alert(
          "¡Gracias por tu petición de oración! Nos pondremos en contacto contigo pronto."
        );
        form.reset();
      } else {
        const errorData = await response.text();
        console.error("Form submission error:", errorData);
        console.error("Response status:", response.status);
        console.error(
          "Response headers:",
          Object.fromEntries(response.headers.entries())
        );

        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, intenta de nuevo o contacta directamente al Pastor Dr. Hector M. Aldaz al 703-724-4925 o por correo a haldaz@cfcwired.org"
      );
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
          fontFamily: '"DM Sans", sans-serif',
          "& .MuiTypography-root": {
            fontFamily: '"DM Sans", sans-serif',
            color: "black",
            fontSize: "15px",
          },
          "& .MuiInputBase-root": {
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
          },
          "& .MuiButton-root": {
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
          },
        }}
      >
        <form
          name="prayer-request"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
            <Typography variant="h6" sx={{ mb: 1 }}>
              ¿Cómo podemos orar por ti?
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
            <Typography variant="h6" sx={{ mb: 1 }}>
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
            disableElevation
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
