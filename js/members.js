const headTitle = document.getElementById("head-title");
const paper = document.getElementById("paper");
const membersTitle = document.getElementById("members-title");
const headJobList = document.getElementById("head-job-list");
const membersJobList = document.getElementById("members-job-list");
const membersJobListTitle = document.getElementById("members-job-list-title");
const imagesContainer = document.getElementById("images-container");

/* ----------------- AC COMMITTEE ----------------*/

const ACHeadJobDescriptionList = [
    "Make A Plan For The Whole Year Which Should Include Goals And Agenda For Each Month.",
    "Set A Description For The Workshops And Choose A Crew For Each.",
    "Create A Healthy Environment Between The Members.",
    "Be A Source Of Positivity And Support For The Members.",
    "Monitor The Members And Guide Them While Maintaining Their Dependability And Leaving Them Enough Space To Shine.",
    "Make Sure The Academic Projects Are Well Organized By The Members."
]

const ACMemberImageList = [
    "AC-members/ID ,alak_page-0001.jpg",
    "AC-members/ID abdulrahman - Copy_page-0001.jpg",
    "AC-members/ID dal - Copy_page-0001.jpg",
    "AC-members/ID esraa - Copy_page-0001.jpg",
    "AC-members/ID HABIBA - Copy_page-0001.jpg",
    "AC-members/id jwairiah - Copy_page-0001.jpg",
    "AC-members/ID mahmoud - Copy_page-0001.jpg",
    "AC-members/ID mirna_page-0001.jpg",
    "AC-members/ID nesreen_page-0001.jpg",
    "AC-members/ID noorhan_page-0001.jpg",
    "AC-members/ID rodina_page-0001.jpg",
    "AC-members/ID salma_page-0001.jpg",
    "AC-members/ID seif_page-0001.jpg",
    "AC-members/ID youssef_page-0001.jpg",
    "AC-members/ID ziad_page-0001.jpg",
    "AC-members/ID ziad1_page-0001.jpg",
    "AC-members/IDesraa_page-0001.jpg",
    "AC-members/IDfarah_page-0001.jpg",
    "AC-members/IDfatma_page-0001.jpg",
    "AC-members/nour atef.jpg",

]

const ACMemberJobDescriptionList = [
    "They Are Responsible For The Sessions Fully, Preparing Its Materials.",
    "Deliver Them Through Sessions To The Participants To Maximize Their Potentials & Decrease The Gap Between Them & The Market Needs Through 5 Workshops (Appsplash, Devology, Markative, Investeneur, Techsolve)."
]

/* ----------------- HR COMMITTEE ----------------*/

const HRHeadJobDescriptionList = [
    "Provide Reports And Feedback Through The Year Either Verbally Or Written To President.",
    "Do Research And Development To Major Event That Are Happening In The Year To Help Make Them Better Or Avoid Any Problems That Occurred In The Previous Years And Act As Counsel For The Next Years.",
    "Collect Database Of Members And Heads (Previous And Current) And Trainers.",
    "Handle Problems With Members, Heads, Or High Board.",
    "Provide Feedback To Board And High Board For Each Squad.",
]

const HRMemberImageList = [
    "HR-members/abdelrahman-ahmed_.png",
    "HR-members/ali-wessam.png",
    "HR-members/bassel-eslam.png",
    "HR-members/hamis-walid.png",
    "HR-members/maha-gamal.png",
    "HR-members/mariam-ashraf.png",
    "HR-members/marwa-khaled.png",
    "HR-members/Moustfa-ezz-eldin.png",
    "HR-members/naira-mohamed.png",
    "HR-members/rana-ahmed.png",
    "HR-members/saad-usama.png",
    "HR-members/shahdan_.png",
    "HR-members/tasneem-tareek.png",
]

const HRMemberJobDescriptionList = [
    "Managing The Human Resources Functions Such As Recruiting, Interviewing Selecting And Planning. Analyzing Event, Sessions And Meetings And Reporting Them.",
    "Working On And Writing R&Ds Reports.",
    "Keeping Up With Members Work And Evaluating Them And Constantly Giving Them Feedback.",
    "Making Sure That The Constitutions Are Being Followed Along With Work Ethics.",
    "Developing Members By Giving Them Proper Trainings That They Need Along The Year.",
    "Evaluating SCCI Performance Output.",
    "Solving Problems In Committees And In SCCI As A Whole And Maintaining A Great Environment And Keeping The SCCI Present."
]

/* ----------------- IT COMMITTEE ----------------*/
const ITHeadJobDescriptionList = [
    "Responsible For Planning For The Website And Mobile App Of SCCI And Guide The Members For Creating It.",
    "Responsible For Providing The Needed Training For The Members To Know How To Create The Website And The Mobile Application Right Without Facing Any Problems Or Difficulties.",
    "Responsible For Linking All The Members Work Together And Make Them On The Same Rythm.",
    "Responsible For Editing On The Members Work To Make All Of Them With The Same Flow.",
];

const ITMemberImageList = [
    "IT-members/Yahia Mohamed.jpg",
    "IT-members/Ahmed Reda.jpg",
    "IT-members/Dareen Mohamed.jpg",
    "IT-members/Habiba Mohamed(1).jpg",
    "IT-members/Maryam Magdy.jpg",
    "IT-members/Mazen Khaled.jpg",
    "IT-members/Mohamed Ali.jpg",
    "IT-members/Mohamed Samy.jpg",
    "IT-members/Nour Yasser.jpg",
    "IT-members/Raghad Hassan.jpg",
    "IT-members/Shaza Mohamed.jpg",
    "IT-members/Abdelaziz youssef1.jpg"
]

const ITMemberJobDescriptionList = [
    "Responsible For SCCI's Website Which Is The Core Of Marketing To The Place And Facilitate The Workflow Totally At The Same Time.",
    "Responsible For Maintaining The Participants' Laptops From Software As. Operating Systems And The Software Programs Used In Sessions.",
    "Responsible For SCCI's Mobile Application.",
    "Responsible For Creating Any Required Form For Any Of The SCCI's Events.",
];

/* ----------------- SMM COMMITTEE ----------------*/
const SMMHeadJobDescriptionList = [
    "Responsible For All Campaigns & Digital Designs For All SCCI Events & Their Content.",
    "Manage SCCI's Social Media Platforms, Newsletter & Behance Project (Facebook & Instagram).",
    "Market SCCI Events And Online Coverage For All SCCI's Sessions & Events.",
];

const SMMMemberImageList = [
    "SMM-members/abdelrahman-ahmed-copy_page-0001.png",
    "SMM-members/farah-hossam-copy_page-0001.png",
    "SMM-members/jana-abd-el-maksoud-copy_page-0001.png",
    "SMM-members/marina-amr-copy_page-0001.png",
    "SMM-members/nour-barakat-copy_page-0001.png",
    "SMM-members/nouran-elsayed-copy_page-0001.png",
    "SMM-members/omar-bahy-copy_page-0001.png",
    "SMM-members/tarek-yehia-copy_page-0001.png",
    "SMM-members/waad-walid-copy_page-0001.png",
    "SMM-members/yousef-ahmed-copy_page-0001.png",
    "SMM-members/yousef-mostafa-copy_page-0001.png"
]

const SMMMemberJobDescriptionList = [
    "Full Marketing Campaigns Designing.",
    "Writing & Designing SCCI's Newsletter.",
    "Online Coverage For SCCI's Sessions & Events.",
    "Managing SCCI's Social Media Platforms (Facebook & Instagram).",
    "Replying On Posts, Comments, Questions On The Social Media Platforms.",
];

/* ----------------- MP COMMITTEE ----------------*/
const MPHeadJobDescriptionList = [
    "Responsible For Using Media Tools Such As Videos, Documentaries, Series & Projects.",
    "Photography Coverage Of All SCCI's Sessions And Events.",
    "Interactive Media To Deliver SCCI's Image.",
];

const MPMemberImageList = [
    "MP-members/Abdelrahman Magdy.jpg",
    "MP-members/Ahmed Hany.jpg",
    "MP-members/Alaa Reda.jpg",
    "MP-members/Hagar Hossam.jpg",
    "MP-members/Malak Elbaron.jpg",
    "MP-members/Nada Soliman.jpg",
    "MP-members/Rawda Ahmed.jpg",
    "MP-members/Seif Darwish.jpg",
    "MP-members/Seif Sayed.jpg",
    "MP-members/Youssef Hesham.jpg",
    "MP-members/Zekra Ahmed.jpg",
]

const MPMemberJobDescriptionList = [
    "Photography, Video Making.",
    "Coverage For SCCI's Sessions And Events.",
    "Responsible For Visual Documentaries For SCCI.",
    "Managing SCCI's YouTube Channel.",
];

/* ----------------- DD COMMITTEE ----------------*/
const DDHeadJobDescriptionList = [
    "Determine The Message Of What The Design Should Portray.",
    "Using Palettes, Brushes & Tools To Create The Most Beautiful Pieces.",
    "Combine Art & Technology To Communicate Ideas Through The Printed Designs & Posters.",
    "Responsible For Handmade Crafts, Decorations, Internal & External Booths, T-Shirts & IDs & Giveaways.",
];

const DDMemberImageList = [
    "DD-members/AhmedID.jpg",
    "DD-members/FaresID.jpg",
    "DD-members/HabibaID.jpg",
    "DD-members/MariamID.jpg",
    "DD-members/MohieID.jpg",
    "DD-members/NourhanID.jpg",
    "DD-members/SalmaID.jpg",
    "DD-members/ShahdID.jpg",
    "DD-members/shroukid.jpg",
    "DD-members/ZiadID.jpg",
]

const DDMemberJobDescriptionList = [
    "Responsible For Internal & External Booths.",
    "Responsible For Photobooths Decorations.",
    "Responsible For T-Shirt, IDs, Brochures, Flyers, Tickets, Posters, General Meeting's Gifts, Certificate Designs.",
    "Responsible For Workshops Decorations.",
    "Responsible For SCCI Events' Decorations.",
];

/* ----------------- MC COMMITTEE ----------------*/
const MCHeadJobDescriptionList = [
    "Distributing the members on the workshops.",
    "Supervising the handling of the application.",
    "Help the members making the mobile application.",
    "Coordinates with SMM head to upload the newsletter on the application.",
    "Help the members to make the forms.",
    "Making a friendly environment in the committee to produce more good work.",
    "Support the members and help them to learn more and be more productive.",
    "Provide the members with all the needed trainings.",
];

const MCMemberImageList = [
    "MC-members/Abdelrahman-Tamer_page-0001.png",
    "MC-members/Adham-Mohamed_page-0001.png",
    "MC-members/Habiba-Alaa_page-0001.png",
    "MC-members/Mahmoud-Bendary_page-0001.png",
    "MC-members/mohamed-ayman.png",
    "MC-members/Omar-Abdelmonem_page-0001.png",
    "MC-members/omar-tawfik.png",
    "MC-members/Sama-Haitham_page-0001.png",
    "MC-members/yara-salah2.png",
    "MC-members/Yassin-Farouk_page-0001.png",
    "MC-members/Youssef-Wael_page-0001.png",
]

const MCMemberJobDescriptionList = [
    "Technical support for all the workshops.",
    "Responsible for handling SCCI application.",
    "Upload the newsletter on the website in coordination with SMM.",
    "Make all the forms that will be needed through the year.",
    "Make a partition in the application for SCCI store in coordination with DD.",
    "Creating an absence form to make it easier to utilize time away for HRs.",
    "Including sections in the application for posting announcements and uploading tasks for participants and resources.",
];

/* ----------------- PR COMMITTEE ----------------*/
const PRHeadJobDescriptionList = [
    " Planning, Developing And Implementing PR Strategies.",
    "Managing Enquires From Media, Individuals And Other Organizations.",
    "Excellent Initiative Ability To Prioritize And Plan Effectively.",
    "Having Excellent Communication And Leadership Skills.",
    "Places And Permissions For Juniors & Internship Sessions."
]

const PRMemberImageList = [
    "pr-members/AHMED ATEF.jpg",
    "pr-members/dana gamal.jpg",
    "pr-members/fady malak.jpg",
    "pr-members/hassan ahmed.jpg",
    "pr-members/mahmoud khaled.jpg",
    "pr-members/mohamed hesham.jpg",
    "pr-members/nour emad.jpg",
    "pr-members/pansea hesham.jpg",
    "pr-members/rawan ahmed.jpg",
    "pr-members/rawan sabry.jpg",
    "pr-members/sohaila tamer.jpg",
]

const PRMemberJobDescriptionList = ["Responsible For All FCAI Permissions.",
    "Responsible For Ushering Permissions.",
    "Responsible For Media Sponsors.",
    "Making And Organizing Opening.",
    "Making And Organizing Closing.",
    "Places For Juniors Sessions.",
    "Place For The Conference.",
    "Build A Positive Relationship With The Public, Partners, Members, And Other Organizations."
]

/* ----------------- CR COMMITTEE ----------------*/
const CRHeadJobDescriptionList = [
    "Always Following Up With The Members With Each Task Given And Always Giving Them Constructive Feedbacks.",
    "Leaving A Positive Impact On The Committee, So The Committee Would Leave A Positive Impact On SCCI.",
    "Communicating With The Committee's Members (One To One Meeting) Regularly To Have Each Member's Feedbacks About (Other Members, Meetings' Efficiency, Tasks, Work Method, Self- Development)."
]

const CRMemberImageList = [
    "CR-members/ID[1].png",
    "CR-members/ID[2].png",
    "CR-members/ID[3].png",
    "CR-members/ID[4].png",
    "CR-members/ID[5].png",
    "CR-members/ID[6].png",
    "CR-members/ID[7].png",
    "CR-members/ID[8].png",
    "CR-members/ID[9].png",
    "CR-members/ID[10].png",
    "CR-members/ID[11].png",
    "CR-members/ID[12].png",
]

const CRMemberJobDescriptionList = ["Organizing Charity Events And Campaigns To Help Those In Need.",
    "Organizing Community Event To Raise Awareness Regarding A Specific Issue Facing The Community.",
    "Coffee Break Activities To Help All Participants To Bond With Others Outside Of Their Workshop."
]


/* ----------------- Logistics COMMITTEE ----------------*/
const LogisticsHeadJobDescriptionList = [
    "Logistics Head Is Responsible For Providing All The Goods And Operations Needed By The Organization Through His / Her Team, And To Prepare A Well-Trained Team That Can Work Directly In Any Field Related To The Business Development And In Charge Of All The Operations Processes."
]

const LogisticsMemberImageList = [
    "LOG-members/Abdelrahman-Medhat.png",
    "LOG-members/Ahmed-Medhat.png",
    "LOG-members/amin.jpg",
    "LOG-members/Ethar-Osama.png",
    "LOG-members/kareem.jpg",
    "LOG-members/Moaz-Mahmoud.png",
    "LOG-members/Mohamed-Wael.png",
    "LOG-members/Mostafa-Mahmoud.png",
    "LOG-members/nour.jpg",
    "LOG-members/Nouran-Khaled.png",
    "LOG-members/omar.jpg",
    "LOG-members/rawda.jpg",
]

const LogisticsMemberJobDescriptionList = ["Our Role In SCCI Is To Provide The Organization With All Needed Resources And Tangible Goods And Materials Like Wearing, Printings Work, Catering, Different Kinds Of Materials ...Etc.",
    "Also We Are Responsible For All The Kinds Of Operations And The Fun Part Of The Year Like Organizing The Crew Outings And The Mid-Year Trip."
]

/* ----------------- BD COMMITTEE ----------------*/
const BDHeadJobDescriptionList = [
    "Providing The Members With The Needed Trainings.",
    "Ensuring The Good Quality Of The Output To Reach The Goals Of The High Board For This Year.",
    "Providing The Organization With The Needed Fund To Cover The Year's Costs.",
    "Providing SCCI With A Coworking Space With Affordable Costs For The Whole Year's Meetings.",
    "Providing SCCI With The Needed Academic & Services Sponsorships."
]

const BDMemberImageList = [
    "BD-members/Abdallah Hassan.jpg",
    "BD-members/Ahmed Amin.jpg",
    "BD-members/Ammar El Zayat.jpg",
    "BD-members/Lama Ahmed.jpg",
    "BD-members/Lina Mohamed.jpg",
    "BD-members/merna.jpg",
    "BD-members/Mohamed Nabil.jpg",
    "BD-members/Nermin Ahmed.jpg",
    "BD-members/Nour El Boghdady.jpg",
    "BD-members/Rehab Omar.jpg",
    "BD-members/Sarah Refaat.jpg",
]

const BDMemberJobDescriptionList = ["Providing SCCI With Different Sponsors.",
    "Organizing An Event To Brand The Name Of SCCI.",
    " Cover Up All The Costs Of The Year To Help In Achieving The Main Goal Of SCCI “Seek The Peak.",
    "Help Investeneur Participants To Know More Practically And Judge Their Mid-Year Project And Their Conference Project."
]


function getCommitteeNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('com');
}

function handleJobList(list, element) {
    list.forEach(job => {
        element.innerHTML += `<div><li>${job}</li></div>`;
    })
}

function handleImagesFun(list, element) {
    list.forEach(image => {
        element.innerHTML += `<div class="letter"><img src="./img/${image}" alt="Member" height="100%" width="100%"></div>`;
    })
}

function handleHeadJobList() {
    if (committee == "ac") {
        headTitle.innerHTML = "Academic Head";
        paper.src = "./img/heads-images/NASSER-WEB.png";
        membersTitle.innerHTML = "AC Members";
        handleJobList(ACHeadJobDescriptionList, headJobList);
    } else if (committee == "hr") {
        headTitle.innerHTML = "Human Resources Head";
        paper.src = "./img/heads-images/HANADI-WEB.png";
        membersTitle.innerHTML = "HR Members";
        handleJobList(HRHeadJobDescriptionList, headJobList);
    } else if (committee == "it") {
        headTitle.innerHTML = "Information Technology Head";
        paper.src = "./img/heads-images/HANA--WEB.png";
        membersTitle.innerHTML = "IT Members";
        handleJobList(ITHeadJobDescriptionList, headJobList);
    } else if (committee == "smm") {
        headTitle.innerHTML = "Social Media Marketing Head";
        paper.src = "./img/heads-images/MARWAN-WEB.png";
        membersTitle.innerHTML = "SMM Members";
        handleJobList(SMMHeadJobDescriptionList, headJobList);
    } else if (committee == "mp") {
        headTitle.innerHTML = "Media Production Head";
        paper.src = "./img/heads-images/DOAA-WEB.png";
        membersTitle.innerHTML = "MP Members";
        handleJobList(MPHeadJobDescriptionList, headJobList);
    } else if (committee == "dd") {
        headTitle.innerHTML = "Design & Decoration Head";
        paper.src = "./img/heads-images/SAMA-WEB.png";
        membersTitle.innerHTML = "DD Members";
        handleJobList(DDHeadJobDescriptionList, headJobList);
    } else if (committee == "mc") {
        headTitle.innerHTML = "Mobile Craft Head";
        paper.src = "./img/heads-images/NAEL--WEB.png";
        membersTitle.innerHTML = "MC Members";
        handleJobList(MCHeadJobDescriptionList, headJobList);
    } else if (committee == "PR") {
        headTitle.innerHTML = "Public Relations Head";
        paper.src = "./img/heads-images/SALMA--WEB.png";
        membersTitle.innerHTML = "PR Members";
        handleJobList(PRHeadJobDescriptionList, headJobList);
    } else if (committee == "CR") {
        headTitle.innerHTML = "community Relations Head";
        paper.src = "./img/heads-images/ESLAM-WEB.png";
        membersTitle.innerHTML = "CR Members";
        handleJobList(CRHeadJobDescriptionList, headJobList);
    } else if (committee == "Logistics") {
        headTitle.innerHTML = "Logistics Head";
        paper.src = "./img/heads-images/MENNA-ELTOBGY-WEB.png";
        membersTitle.innerHTML = "Logistics Members";
        handleJobList(LogisticsHeadJobDescriptionList, headJobList);
    } else if (committee == "BD") {
        headTitle.innerHTML = "Business Deveolpment Head";
        paper.src = "./img/heads-images/YEHIA-WEB.png";
        membersTitle.innerHTML = "BD Members";
        handleJobList(BDHeadJobDescriptionList, headJobList);
    }
}

function handleMembersJobList() {
    if (committee == "ac") {
        membersJobListTitle.innerHTML = "AC Job Description";
        handleJobList(ACMemberJobDescriptionList, membersJobList);
    } else if (committee == "hr") {
        membersJobListTitle.innerHTML = "HR Job Description";
        handleJobList(HRMemberJobDescriptionList, membersJobList);
    } else if (committee == "it") {
        membersJobListTitle.innerHTML = "IT Job Description";
        handleJobList(ITMemberJobDescriptionList, membersJobList);
    } else if (committee == "smm") {
        membersJobListTitle.innerHTML = "SMM Job Description";
        handleJobList(SMMMemberJobDescriptionList, membersJobList);
    } else if (committee == "mp") {
        membersJobListTitle.innerHTML = "MP Job Description";
        handleJobList(MPMemberJobDescriptionList, membersJobList);
    } else if (committee == "dd") {
        membersJobListTitle.innerHTML = "DD Job Description";
        handleJobList(DDMemberJobDescriptionList, membersJobList);
    } else if (committee == "mc") {
        membersJobListTitle.innerHTML = "MC Job Description";
        handleJobList(MCMemberJobDescriptionList, membersJobList);
    } else if (committee == "PR") {
        membersJobListTitle.innerHTML = "PR Job Description";
        handleJobList(PRMemberJobDescriptionList, membersJobList);
    } else if (committee == "CR") {
        membersJobListTitle.innerHTML = "CR Job Description";
        handleJobList(CRMemberJobDescriptionList, membersJobList);
    } else if (committee == "Logistics") {
        membersJobListTitle.innerHTML = "Logistics Job Description";
        handleJobList(LogisticsMemberJobDescriptionList, membersJobList);
    } else if (committee == "BD") {
        membersJobListTitle.innerHTML = "BD Job Description";
        handleJobList(BDMemberJobDescriptionList, membersJobList);
    }
}

function handleImages() {
    if (committee == "ac") {
        handleImagesFun(ACMemberImageList, imagesContainer);
    } else if (committee == "hr") {
        handleImagesFun(HRMemberImageList, imagesContainer);
    } else if (committee == "it") {
        handleImagesFun(ITMemberImageList, imagesContainer);
    } else if (committee == "smm") {
        handleImagesFun(SMMMemberImageList, imagesContainer);
    } else if (committee == "mp") {
        handleImagesFun(MPMemberImageList, imagesContainer);
    } else if (committee == "dd") {
        handleImagesFun(DDMemberImageList, imagesContainer);
    } else if (committee == "mc") {
        handleImagesFun(MCMemberImageList, imagesContainer);
    } else if (committee == "PR") {
        handleImagesFun(PRMemberImageList, imagesContainer);
    } else if (committee == "CR") {
        handleImagesFun(CRMemberImageList, imagesContainer);
    } else if (committee == "Logistics") {
        handleImagesFun(LogisticsMemberImageList, imagesContainer);
    } else if (committee == "BD") {
        handleImagesFun(BDMemberImageList, imagesContainer);
    }
}

const committee = getCommitteeNameFromURL();

handleHeadJobList();
handleImages();
handleMembersJobList();