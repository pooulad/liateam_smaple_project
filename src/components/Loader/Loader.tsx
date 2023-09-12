import { Backdrop } from "@mui/material";
import { CustomProgressBar } from "../Custom";
import { ReactNode } from "react";

interface ILoaderProps {
  children?: ReactNode;
  loading?: boolean;
}

function Loader({ children = null, loading = false }: ILoaderProps) {
  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loading}
      >
        <CustomProgressBar size={40} />
      </Backdrop>
      {children}
    </>
  );
}

export default Loader;