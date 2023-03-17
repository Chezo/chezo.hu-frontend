import CVICON from './icons/CV.svg'
import fbICON from './icons/fb.svg'
import githubICON from './icons/github.svg'
import linkedinICON from './icons/linkedin.svg'
import stackoverflowICON from './icons/stackoverflow.svg'
import CVPDF from './downloadable/CV.pdf'
import SocialMedia from './classes/SocialMedia'
import Skill from './classes/Skill'
import ProgExperience from './classes/ProgExperience'
import School from './classes/School'
import { Organization, Role } from './classes/Organization'
import Image from './classes/Image'

import Masni1 from './images/Masni1.avif'
import Masni2 from './images/Masni2.avif'
import Masni3 from './images/Masni3.avif'

const serverIp = 'https://pi.chezo.hu/';

const facebook = new SocialMedia("Facebook", "https://www.facebook.com/ZSNChezo/", fbICON)
const linkedIn = new SocialMedia("LinkedIn", "https://www.linkedin.com/in/zsoltnagy-chezo/", linkedinICON)
const gitHub = new SocialMedia("Github", "https://github.com/Chezo", githubICON)
const stackoverflow = new SocialMedia("StackOverflow", "https://stackoverflow.com/users/16993334/chezo", stackoverflowICON)
const CV = new SocialMedia("CV", CVPDF, CVICON)
const socials = [CV, facebook, linkedIn, gitHub, stackoverflow]



const java = new Skill('Java', '70', 'Mid')
const csharp = new Skill('C#', '35', 'Mid')
const scala = new Skill('Scala', '60', 'Junior')
const kotlin = new Skill('Kotlin', '60', 'Junior')
const programmingLevels = [java, csharp, scala, kotlin]



const hungarian = new Skill('Hungarian', '100', '')
const english = new Skill('English', '70', '')
const german = new Skill('German', '5', '')
const languageLevels = [hungarian, english, german]



const epam = new ProgExperience('Software Engineer', 'EPAM System', 'https://www.epam.com/', '2022-Present', 'Develop java REST(ful) APIs using Spring(Core, Boot, MVC, Data, Security, AOP)', 'Java, Hibernate, Gradle, JUnit4, Mockito, Jacoco, AWS')
const universityProg = new ProgExperience('Engineering information technology student', 'Obuda university', 'https://uni-obuda.hu/main-page/', '2020-Present', 'Algorithm theory, implementation of data structures, basic assembly programs', 'C#, Java, Assembly')
const greenfox = new ProgExperience('Junior java backend developer student', 'Green Fox academy.', 'https://www.greenfoxacademy.com/', '2021', 'Automation of repetitive tasks with javaFx app, powershell and batch scripting', 'Java, Swing, Spring boot, Thymeleaf, Hibernate, Docker')
const getronics = new ProgExperience('Field Service Technician', 'Getronics Hungary Ltd.', 'https://www.getronics.com/', '2019-2022', 'Automation of repetitive tasks with javaFx app, powershell and batch scripting', 'Java, PowerShell, Vbs')
const progexp = [epam, universityProg, greenfox, getronics]



const EngiinerInformationTech = new School('Óbuda University', 'Engineering Information Technology', 'https://uni-obuda.hu/main-page/', '2020-')
const JuniorJavaDev = new School('Óbuda University', 'Junior Java developer', 'https://www.greenfoxacademy.com/en/home', '2021')
const javaSE = new School('Studicore', 'Java SE', 'https://www.studicore.hu/', '2021-')
const teachUnteachable = new School('Pressley Ridge', 'Teach the unteachable', 'https://nobadkid.org/', '2016')
const schools = [EngiinerInformationTech, JuniorJavaDev, javaSE, teachUnteachable]



const pr2 = new Role('Peer Facilitator', '2016-2018', 'Facilitating peer groups, organizing and implementing activities of the foundation')
const pr1 = new Role('Experiential Expert', '2018-', 'Contribution to teacher trainings and activities of the foundation, peer mentoring')
const prRoles = [pr1, pr2]
const pressley = new Organization('Pressley Ridge', 'https://nobadkid.org', prRoles);

const integrom1 = new Role('Member', '2019-', 'Participating in skills development workshops, mentoring and counselling Roma peers')
const integromRoles = [integrom1]
const integrom = new Organization('Integrom', 'http://integrom.hu/', integromRoles);

const romver1 = new Role('Member', '2019-', 'Participating in skills development workshops and university preparatory activities for Roma youths')
const romverRoles = [romver1]
const romver = new Organization('Romaversitas', 'https://romaversitas.hu/en/', romverRoles);

const volunteering = [pressley, integrom, romver]


const dog1 = new Image('Masni', 'Masni1', Masni1);
const dog2 = new Image('Masni2', 'Masni2', Masni2);
const dog3 = new Image('Masni3', 'Masni3', Masni3);
const masni = [dog1, dog2, dog3]


const sequences = [

    'I am a back-end developer',
    2000,
    'I am an experimential educator',
    2000,
    'I am a game developer',
    2000,
    'I am a designer',
    2000,
    'I am a hard worker',
    2000,
    'I am a dog owner',
    2000,
    /* 'I am a content creator',
     2000,*/
]


export { sequences, masni, volunteering, schools, languageLevels, progexp, programmingLevels, socials, serverIp };