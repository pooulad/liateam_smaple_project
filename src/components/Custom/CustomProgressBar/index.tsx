import { CircularProgress, CircularProgressProps } from "@mui/material";

export default function CustomProgressBar(props: CircularProgressProps) {
  return <CircularProgress size={20} color="primary" {...props} />;
}
