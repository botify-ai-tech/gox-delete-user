import { useState } from "react";
import { RemoveUser } from "@/store/ChatSlice";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState("");
  const [Loading, SetLoading] = useState(false);
  const SubmitForm = (e) => {
    e?.preventDefault();
    SetLoading(true);
    const body = {
      email: Email?.trim(),
      orgId: process.env.NEXT_PUBLIC_ORGID,
    };
    dispatch(RemoveUser(body))
      .unwrap()
      .then((data) => {
        SetLoading(false);
        if (data?.status === "SUCCESS") {
          toast?.success(data?.data?.message);
          SetEmail("");
        } else {
          toast?.error(data?.error);
        }
      })
      .catch((e) => {
        console.error(e);
        SetLoading(false);
        toast?.error("Something went wrong try again!!");
      });
  };
  return (
    <>
      <div className="Home_Page">
        <div className="container">
          <h1>GOX App Delete User</h1>
          <br />
          <form onSubmit={SubmitForm}>
            <div className="input_wrapper_avtar">
              <label className="label" htmlFor="email">
                Enter User email
              </label>
              <input
                placeholder="Enter User email"
                title="Enter User email"
                required
                autoComplete="on"
                className="input_avtar"
                name="email"
                type="email"
                id="email"
                onChange={(e) => SetEmail(e?.target?.value)}
                value={Email}
              />
            </div>
            <div className="btn_wrapper">
              <button className="btn_1">Delete</button>
            </div>
            {Loading && <h1>Loading........</h1>}
          </form>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            border: "0",
            outline: "3px solid  #395B64",
            padding: "8px 10px",
            fontFamily: "'Lato'",
            fontStyle: "normal",
            backgroundColor: "#1e1e1e",
            color: "#fff",
            fontSize: "12px",
            boxShadow: " 0px 5px 9px rgba(0, 0, 0, 0.5)",
            marginBottom: "5px",
          },
        }}
        position="top-center"
      />
    </>
  );
}
