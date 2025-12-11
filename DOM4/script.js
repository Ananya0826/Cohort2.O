const users = [
  {
    fullName: "Sarthak Sharma",
    image: "https://plus.unsplash.com/premium_photo-1763734616837-b51f49ceaab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Developer",
    description: "Passionate full-stack developer specializing in React and Node.js. Loves building scalable applications and contributing to open-source.",
    tags: ["JavaScript", "React", "Node.js", "Open Source"]
  },
  {
    fullName: "Meera Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description: "Creative designer focused on crafting intuitive and aesthetically pleasing user experiences. Believes design is a powerful problem-solving tool.",
    tags: ["Figma", "UI/UX", "Design Thinking", "Prototyping"]
  },
  { 
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Data Scientist",
    description: "Data enthusiast skilled in machine learning, statistical modeling, and AI-driven insights. Loves working with big data.",
    tags: ["Python", "Machine Learning", "AI", "Data Analysis"]
  },
  {
    fullName: "Ishita Singh",
    image: "https://images.unsplash.com/photo-1764017884266-b53a65cf0044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    profession: "Digital Marketer",
    description: "Expert in SEO, SEM, and social media marketing. Helps brands grow their digital presence and storytelling.",
    tags: ["SEO", "Content Marketing", "Branding", "Analytics"]
  }
];
var sum='';
users.forEach(function(elem){
    sum=sum+`<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`;
})
console.log(sum);
var main=document.querySelector('main');
main.innerHTML=sum;