import { Facebook, GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import i18n from './i18n'

const data = {
    name: "Kapena Peter Lumumba",
    title: i18n.language === 'en' ? "Software Engineer" : 'Ingénieur logiciel',
    job: "Full Stack Developer",
    email: "peterkapenapeter@gmail.com",
    languages: "English & French",
    socials: [
        {
            icon: <Facebook></Facebook>,
            link: "https://www.facebook.com/peterkapenapeter",
        },
        {
            icon: <Twitter></Twitter>,
            link: "https://twitter.com/Pkapenapeter",
        },
        {
            icon: <GitHub></GitHub>,
            link: "https://github.com/peterkapena",
        },
        {
            icon: <LinkedIn></LinkedIn>,
            link: "https://www.linkedin.com/in/kapena-peter-lumumba-7344b8158/",
        }
    ],
    wordkDesc: [
        `Design and develop user requirements.
        Troubleshoot/Debug and fix code bugs.
	    Support users
	    Code Documentation`
    ],
    expertise: [
        'C# and Ms Visual Basics', 'NET Core, .NET Framework', 'Razor, Blazor, GRPC, MVC, SPA', 'JavaScript'
        , 'Node JS, React JS, React Native', 'jQuery', 'Flutter or Dart', 'Ms SQL Server, MongoDB, SQLite',
        'WordPress', 'Java EE, JSP, JSF, Java EL', 'Material UI, Bootstrap, HTML, CSS', 'C / C++', 'Azure',
        'Firebase', 'AWS', 'Front-end and Back-end'
    ],
    skills: [
        "REST API", "SOAP Services", "Google Remote Procedures Call - GRPC", "Visual Studio, VS Code, Android Studio",
        "Git, GitHub, Azure DevOps", "Ms Office 365", "Microsoft server 2012 & 2019", "Windows 10", "Ubuntu – Linux",
        "Microsoft IIS"
    ]
}
export default data