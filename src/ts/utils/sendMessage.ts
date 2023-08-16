export const sendMessage = async (message: string) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: message,
          parse_mode: "html",
        }),
      }
    );

    if (response.ok) {
      alert("success");
    } else {
      alert("error");
    }
  } catch (error) {
    alert(String(error));
  }
  //   window.location.reload();
};
