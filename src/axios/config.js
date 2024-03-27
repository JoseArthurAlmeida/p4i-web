import axios from "axios";

const conexaoApi = axios.create({
  //baseURL: "https://backend-p4i.josarthur2.repl.co/api",
  baseURL: 'https://d337eea1-1800-4db1-8a2f-dc1196ea2199-00-3lfsyinh3e6gn.worf.replit.dev/api',
  
  headers: {
    "Content-Type": "application/json",
  },
});

export default conexaoApi;