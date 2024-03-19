import { AttachMoney, Grade, IntegrationInstructions, People, Person, Settings, SupervisedUserCircle, Update,} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import userImage from '../public/images/best-long-hairstyles-for-men.jpg';
import photo1 from'../public/images/main-photo1.png';
import photo2 from'../public/images/main-photo2.png';
import photo3 from'../public/images/main-photo3.png';
import photo4 from'../public/images/main-photo4.png';


export default {
    linksItemWeb: [
      {
        icon: HomeIcon,
        panel: "panel1",
        linkTeam: [
          { text: "Overview", path: "/home/Overview" },
          { text: "Reports", path: "/home/Reports" },
          { text: "Appointments", path: "/home/Appointments" },
          { text: "Schedule", path: "/home/Schedule" },
          { text: "Financial", path: "/home/Financial" },
        ],
      },
      {
        text: "Features",
        icon: Grade,
        panel: "panel2",
        linkTeam: [
          { text: "Features 1", path: "/blogs/AllBlogs" },
          { text: "Features 2", path: "/blogs/AddBlogs" },
        ],
      },
      {
        text: "Users",
        icon: Person,
        panel: "panel3",
        linkTeam: [
          { text: "Users 1", path: "/blogsService/AllServices" },
          { text: "Users 2", path: "/blogsService/AddServices" },
        ],
      },
      {
        text: "Pricing",
        icon: AttachMoney,
        panel: "panel4",
        linkTeam: [
          { text: "Pricing 1", path: "/blogsService/AllServices" },
          { text: "Pricing 2", path: "/blogsService/AddServices" },
        ],
      },
      {
        text: "Integrations",
        icon: IntegrationInstructions,
        panel: "panel5",
        linkTeam: [{ text: "Integrations", path: "/support/AllComplaints" }],
      },
      
    ],
    linksItemAdmin: [
      {
        text: "Settings",
        icon: Settings,
        panel: "panel6",
        linkTeam: [
          { text: "Overview", path: "/home/Overview" },
          { text: "Reports", path: "/home/Reports" },
          { text: "Appointments", path: "/home/Appointments" },
          { text: "Schedule", path: "/home/Schedule" },
          { text: "Financial", path: "/home/Financial" },
        ],
      },
      {
        title: "John Carter",
        subTitle: "Doctor",
        icon: HomeIcon,
        panel: "panel7",
        soure: "/broken-image.jpg",
        linkTeam: [
          { text: "Overview", path: "/home/Overview" },
          { text: "Reports", path: "/home/Reports" },
          { text: "Appointments", path: "/home/Appointments" },
          { text: "Schedule", path: "/home/Schedule" },
          { text: "Financial", path: "/home/Financial" },
        ],
      },
    ],
    cardData: [
      {title: 'Total Patients', icon: People, num: 401, rate: 8.5 , bg: '#242d63', color: '#7a79f2'},
      {title: 'Total Stuff', icon: SupervisedUserCircle, num: 20, rate: -2.5, bg: '#18404b', color: '#0fa775'},
      {title: 'Appointments', icon: Update, num: 2040, rate: 8.5, bg: '#543b47', color: '#bc6f5a'},
    ],
    patientData: {
      optionName: 'Patient Data',
      options: [ "None", "Atria", "Callisto", "Dione", "Ganymede", "Hangouts Call"],
      rowData: [
        {name: "Jenny Wilson", date: 'Dec 18, 2024', symptoms: 'Geriatrician', status: 'Confirmed', src: photo1},
        {name: "Albert Flores", date: 'Dec 18, 2024', symptoms: 'Internist', status: 'Incoming', src: photo2},
        {name: "Floyd Miles", date: 'Dec 18, 2024', symptoms: 'Urogynecologist', status: 'Confirmed', src: photo3},
        {name: "Marvin McKinney", date: 'Dec 18, 2024', symptoms: 'Cardiologist', status: 'Cancelled', src: photo4},
      ]
    },
    userData: {
      userName: 'Dr. Dilip Anmangandla, MD',
      image: userImage,
      Achievements:  [
        {name: 'Appointment', value: 4250},
        {name: 'Total Patients', value: '32.1k'},
        {name: 'Rate', value: 4.8},
    ],
      optionName: 'Upcoming Appointment',
      options: ['Appointment', 'Total Patients', 'Rate'],
      pieTotal: 45251,
      pieChartData: [
        {
          id: "Excellent",
          label: "Excellent",
          value: 50,
          color: "#3371eb",
        },
        {
          id: "Good",
          label: "Good",
          value: 20,
          color: "#ff8e26",
        },
        {
          id: "Poor",
          label: "Poor",
          value: 30,
          color: "#14cc26",
        },
      ],
      lineChartData: [
        {
          "id": "Dr. Dilip",
          "color": "hsl(98, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 80
            },
            {
              "x": "helicopter",
              "y": 8
            },
            {
              "x": "boat",
              "y": 207
            },
            {
              "x": "train",
              "y": 19
            },
            {
              "x": "subway",
              "y": 1
            },
            {
              "x": "bus",
              "y": 189
            },
            {
              "x": "car",
              "y": 38
            },
            {
              "x": "moto",
              "y": 228
            },
            {
              "x": "bicycle",
              "y": 117
            },
            {
              "x": "horse",
              "y": 168
            },
            {
              "x": "skateboard",
              "y": 24
            },
            {
              "x": "others",
              "y": 180
            }
          ]
        },
      ],
      userVisited: [
        { visited: 'Nurse Visit 20', visitedName: 'Dr. Carol D. Pollack-rundle' }, 
        { visited: 'Annual Visit 15', visitedName: 'Dr.	Donald	F.	Watren' }, 
      ],
    },
  };