import { Container } from "@mui/material";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container component="main">
        {children}
      </Container>
    </>
  );
}
