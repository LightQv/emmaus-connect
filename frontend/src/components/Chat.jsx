import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Bonjour, je suis un ChatBot, posez-moi une question !",
      sentTime: "à l'instant",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (!response.ok) {
        throw new Error("ChatGPT request failed.");
      }

      const data = await response.json();

      if (
        data.choices &&
        data.choices[0] &&
        data.choices[0].message &&
        data.choices[0].message.content
      ) {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  }

  const handleSend = (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    sendMessageToChatGPT(newMessages);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 6,
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "20vw",
        marginBottom: "25px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          overflow: "auto",
          borderRadius: "20px",
          maxHeight: "100vh",
        }}
      >
        <Box sx={{ flex: 1 }}>
          {isTyping && (
            <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
              <CircularProgress />
            </Box>
          )}
          {messages.map((message) => (
            <Paper
              key={uuidv4()}
              sx={{
                p: 2,
                mb: 2,
                backgroundColor: "#002743",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body1" color="white">
                {message.message}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ p: 2 }}>
          <TextField
            focused
            placeholder="Entrez votre question ici"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}

export default Chat;
