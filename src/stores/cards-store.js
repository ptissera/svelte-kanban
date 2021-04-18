import { writable } from 'svelte/store';

export const columns = writable([
    { name: "backlog", cards: [{
          name: "Realizar el create card",
          description: " agregar un boton para crear una card",
          author: "p Tissera",
          created: "2021-04-18",
          updated: "2021-04-18",
          comments: [],
          severity: 1,
        }, {
          name: "Store information",
          description: " almacenar la informacion en algun medio",
          author: "p Tissera",
          created: "2021-04-18",
          updated: "2021-04-18",
          comments: [],
          severity: 2,
        },] },
    { name: "Started", cards: [] },
    { name: "In Progress", cards: [] },
    { name: "Blocked", cards: [] },
    {
      name: "Code Review",
      cards: [
        {
          name: "Problema con los estilos",
          description: " problema para ver los border",
          author: "p Tissera",
          created: "2021-04-12",
          updated: "2021-04-12",
          comments: [],
          severity: 3,
        },
      ],
    },
    { name: "Testing", cards: [] },
    { name: "Canceled", cards: [] },
    { name: "Closed", cards: [] },
  ]);