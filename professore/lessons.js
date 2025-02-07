const lessons = [
  {
    id: 1,
    title: "Lesson 1",
    description: "Description of lesson 1.",
    begin: "2025-02-03T10:15:00",
    end: "2025-02-03T12:15:00"
  },
  {
    id: 2,
    title: "Lesson 2",
    description: "Description of lesson 2.",
    begin: "2025-02-04T09:00:00",
    end: "2025-02-04T11:00:00"
  },
  {
    id: 3,
    title: "Lesson 3",
    description: "Description of lesson 3.",
    begin: "2025-02-07T14:30:00",
    end: "2025-02-07T16:30:00"
  },
  {
    id: 4,
    title: "Lesson 4",
    description: "Description of lesson 4.",
    begin: "2025-02-10T13:00:00",
    end: "2025-02-10T15:00:00"
  },
  {
    id: 5,
    title: "Lesson 5",
    description: "Description of lesson 5.",
    begin: "2025-02-12T11:45:00",
    end: "2025-02-12T13:45:00"
  },
  {
    id: 6,
    title: "Lesson 6",
    description: "Description of lesson 6.",
    begin: "2025-02-14T08:00:00",
    end: "2025-02-14T10:00:00"
  },
  {
    id: 7,
    title: "Lesson 7",
    description: "Description of lesson 7.",
    begin: "2025-02-17T15:30:00",
    end: "2025-02-17T17:30:00"
  },
  {
    id: 8,
    title: "Lesson 8",
    description: "Description of lesson 8.",
    begin: "2025-02-19T16:00:00",
    end: "2025-02-19T18:00:00"
  },
  {
    id: 9,
    title: "Lesson 9",
    description: "Description of lesson 9.",
    begin: "2025-02-21T09:15:00",
    end: "2025-02-21T11:15:00"
  },
  {
    id: 10,
    title: "Lesson 10",
    description: "Description of lesson 10.",
    begin: "2025-02-23T10:00:00",
    end: "2025-02-23T12:00:00"
  },
];

window.onload = addList
function addList() {
  let ul = document.getElementById("lista");
  const nodes = lessons.map(x => {
    let li = document.createElement("li");//crea un punto lista
    let title = document.createTextNode(x.title);//prende il titolo da lesson 
    li.appendChild(title);//al punto della lista attaca il titolo
    return li;
  });

  for(i=0;i<nodes.length-1;i++){
    ul.appendChild(nodes[i])//attacca gli li a ul 
  }


}

