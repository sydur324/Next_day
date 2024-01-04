import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../HomePage/Home/Home";
import Subjects from "../ListJournals/Subjects/Subjects";
import AccountingLayout from "../Layout/AccountingLayout";
import AccountingHome from "../Journals/Accounting/AccountingHome/AccountingHome";
import AccountingCurrentIssue from "../Journals/Accounting/AccountingCurrentIssue/AccountingCurrentIssue";
import AccountingScope from "../Journals/Accounting/AccountingScope/AccountingScope";
import AccountingBoard from "../Journals/Accounting/AccountingBoard/AccountingBoard";
import AccountingSubmision from "../Journals/Accounting/AccountingSubmision/AccountingSubmision";
import AccountingResouch from "../Journals/Accounting/AccountingResouch/AccountingResouch";
import AccountingPolice from "../Journals/Accounting/AccountingPolice/AccountingPolice";
import AccountingUsefullLinks from "../Journals/Accounting/AccountingUsefullLinks/AccountingUsefullLinks";
import AccountingActivities from "../Journals/Accounting/AccountingActivities/AccountingActivities";
import AccountingSubcription from "../Journals/Accounting/AccountingSubcription/AccountingSubcription";
import AccountingInfo from "../Journals/Accounting/AccountingInfo/AccountingInfo";
import AccountingIndex from "../Journals/Accounting/AccountingIndex/AccountingIndex";
import AccountingArcrive from "../Journals/Accounting/AccountingArcrive/AccountingArcrive";
import ResearchPage from "../ResearchPage/ResearchPage";
import AboutPage from "../assets/AboutPage/AboutPage";
import MemberShipPage from "../MemberShipPage/MemberShipPage";
import ContactPage from "../ContactPage/ContactPage";
import LogIn from "../LoginSystem/LogIn/LogIn";
import SignUp from "../LoginSystem/SignUp/SignUp";
import ResearchDetails from "../HomePage/HomeResearch/ResearchDetails/ResearchDetails";
import Privecy from "../PrivecyPage/Privecy/Privecy";
import Accessibility from "../PrivecyPage/Accessibility/Accessibility";
import AgricultureLayout from "../Layout/AgricultureLayout";
import JaesCurrentIssu from "../Journals/Agriculture/JaesCurrentIssu/JaesCurrentIssu";
import JaesHome from "../Journals/Agriculture/jaesHome/jaesHome";
import JaesScope from "../Journals/Agriculture/JaesScope/JaesScope";
import JaesEditor from "../Journals/Agriculture/JaesEditor/JaesEditor";
import JaesSubcription from "../Journals/Agriculture/JaesSubcription/JaesSubcription";
import JaesResources from "../Journals/Agriculture/JaesResources/JaesResources";
import JaesPolicy from "../Journals/Agriculture/JaesPolicy/JaesPolicy";
import JaesUsefullLink from "../Journals/Agriculture/JaesUsefullLink/JaesUsefullLink";
import JaesActivites from "../Journals/Agriculture/JaesActivites/JaesActivites";
import JaesSubmission from "../Journals/Agriculture/JaesSubmission/JaesSubmission";
import EngineeringLayout from "../Layout/EngineeringLayout";
import JeaHome from "../Journals/Engineering/JeaHome/JeaHome";
import JeaCurrentIssue from "../Journals/Engineering/JeaCurrentIssue/JeaCurrentIssue";
import JeaScope from "../Journals/Engineering/JeaScope/JeaScope";
import JeaBoard from "../Journals/Engineering/JeaBoard/JeaBoard";
import JeaSubmission from "../Journals/Engineering/JeaSubmission/JeaSubmission";
import JeaResources from "../Journals/Engineering/JeaResources/JeaResources";
import JeaPolicy from "../Journals/Engineering/JeaPolicy/JeaPolicy";
import JeaUsefullLink from "../Journals/Engineering/JeaUsefullLink/JeaUsefullLink";
import JeaActivities from "../Journals/Engineering/JeaActivities/JeaActivities";
import JeaSubcription from "../Journals/Engineering/JeaSubcription/JeaSubcription";
import JeaInformation from "../Journals/Engineering/JeaInformation/JeaInformation";
import JeoIndex from "../Journals/Engineering/JeoIndex/JeoIndex";
import JeoLoadArcive from "../Arcrive/JeoLoadArcive/JeoLoadArcive";
import ArchaeologyLayout from "../Layout/ArchaeologyLayout";
import ArchaeologyHome from "../Journals/Archaeology/ArchaeologyHome/ArchaeologyHome";
import ArchaeologyCurrentIssu from "../Journals/Archaeology/ArchaeologyCurrentIssu/ArchaeologyCurrentIssu";
import ArchaeologyScope from "../Journals/Archaeology/ArchaeologyScope/ArchaeologyScope";
import ArchaeologyBoard from "../Journals/Archaeology/ArchaeologyBoard/ArchaeologyBoard";
import FixedSubmisson from "../Utilities/FixedSubmisson/FixedSubmisson";
import FixedResources from "../Utilities/FixedResources/FixedResources";
import FixedPolicy from "../Utilities/FixedPolicy/FixedPolicy";
import FixedUseFullLink from "../Utilities/FixedUseFullLink/FixedUseFullLink";
import ArtHistoryLayout from "../Layout/ArtHistoryLayout";
import ArtHistoryHome from "../Journals/ArtHistory/ArtHistoryHome/ArtHistoryHome";
import ArtHistoryCurrentIssu from "../Journals/ArtHistory/ArtHistoryCurrentIssu/ArtHistoryCurrentIssu";
import ArtHistoryScope from "../Journals/ArtHistory/ArtHistoryScope/ArtHistoryScope";
import ArtHistoryBoard from "../Journals/ArtHistory/ArtHistoryBoard/ArtHistoryBoard";
import ArtHistorySubmissoin from "../Journals/ArtHistory/ArtHistorySubmissoin/ArtHistorySubmissoin";
import ArtHistoryResourches from "../Journals/ArtHistory/ArtHistoryResourches/ArtHistoryResourches";
import ArtHistoryPolicy from "../Journals/ArtHistory/ArtHistoryPolicy/ArtHistoryPolicy";
import ArtHistoryUsefullLink from "../Journals/ArtHistory/ArtHistoryUsefullLink/ArtHistoryUsefullLink";
import ArtHistorySubcription from "../Journals/ArtHistory/ArtHistorySubcription/ArtHistorySubcription";
import ArtHistoryInformation from "../Journals/ArtHistory/ArtHistoryInformation/ArtHistoryInformation";
import ArtHistoryIndex from "../Journals/ArtHistory/ArtHistoryIndex/ArtHistoryIndex";
import ArtHistoryArcive from "../Journals/ArtHistory/ArtHistoryArcive/ArtHistoryArcive";
import CenterLayout from "../Layout/CenterLayout";
import CenterSubmission from "../CenterInformation/CenterSubmission/CenterSubmission";
import CenterResources from "../CenterInformation/CenterResources/CenterResources";
import CenterPolicy from "../CenterInformation/CenterPolicy/CenterPolicy";
import CenterLink from "../CenterInformation/CenterLink/CenterLink";
import CenterActivities from "../CenterInformation/CenterActivities/CenterActivities";
import CenterSubcription from "../CenterInformation/CenterSubcription/CenterSubcription";
import CenterInfixedformation from "../CenterInformation/CenterInformation/CenterInfixedformation";
import CenterIndex from "../CenterInformation/CenterIndex/CenterIndex";
import ArchaeologyAricive from "../Journals/Archaeology/ArchaeologyAricive/ArchaeologyAricive";
import BankManagementLayout from "../Layout/BankManagementLayout";
import BankManagementHome from "../Journals/BankManagement/BankManagementHome/BankManagementHome";
import BankManagementIssue from "../Journals/BankManagement/BankManagementIssue/BankManagementIssue";
import BankManagementScope from "../Journals/BankManagement/BankManagementScope/BankManagementScope";
import BankManagementBoard from "../Journals/BankManagement/BankManagementBoard/BankManagementBoard";
import BankManagementArcive from "../Journals/BankManagement/BankManagementArcive/BankManagementArcive";
import BiochemistryLayout from "../Layout/BiochemistryLayout";
import BiochemistryHome from "../Journals/Biochemistry/BiochemistryHome/BiochemistryHome";
import BiochemistryIssue from "../Journals/Biochemistry/BiochemistryIssue/BiochemistryIssue";
import BiochemistryScope from "../Journals/Biochemistry/BiochemistryScope/BiochemistryScope";
import BiochemistryBoard from "../Journals/Biochemistry/BiochemistryBoard/BiochemistryBoard";
import BiochemistryArcive from "../Journals/Biochemistry/BiochemistryArcive/BiochemistryArcive";
import BusinessEthicsLayout from "../Layout/BusinessEthicsLayout";
import BusinessEthicsHome from "../Journals/BusinessEthics/BusinessEthicsHome/BusinessEthicsHome";
import BusinessEthicsIssue from "../Journals/BusinessEthics/BusinessEthicsIssue/BusinessEthicsIssue";
import BusinessEthicsScope from "../Journals/BusinessEthics/BusinessEthicsScope/BusinessEthicsScope";
import BusinessEthicsBoard from "../Journals/BusinessEthics/BusinessEthicsBoard/BusinessEthicsBoard";
import BusinessEthicsArcive from "../Journals/BusinessEthics/BusinessEthicsArcive/BusinessEthicsArcive";
import ComputerScienceLayout from "../Layout/ComputerScienceLayout";
import ComputerScienceHome from "../Journals/ComputerScience/ComputerScienceHome/ComputerScienceHome";
import ComputerScienceIssue from "../Journals/ComputerScience/ComputerScienceIssue/ComputerScienceIssue";
import ComputerScienceScope from "../Journals/ComputerScience/ComputerScienceScope/ComputerScienceScope";
import ComputerScienceBoard from "../Journals/ComputerScience/ComputerScienceBoard/ComputerScienceBoard";
import ComputerScienceArcive from "../Journals/ComputerScience/ComputerScienceArcive/ComputerScienceArcive";
import EconomicsLayout from "../Layout/EconomicsLayout";
import EconomicsHome from "../Journals/Economics/EconomicsHome/EconomicsHome";
import EconomicsIssue from "../Journals/Economics/EconomicsIssue/EconomicsIssue";
import EconomicsScope from "../Journals/Economics/EconomicsScope/EconomicsScope";
import EconomicsBoard from "../Journals/Economics/EconomicsBoard/EconomicsBoard";
import EducationLayout from "../Layout/EducationLayout";
import EducationHome from "../Journals/Education/EducationHome/EducationHome";
import EducationIssue from "../Journals/Education/EducationIssue/EducationIssue";
import EducationScope from "../Journals/Education/EducationScope/EducationScope";
import EducationBoard from "../Journals/Education/EducationBoard/EducationBoard";
import EducationArcive from "../Journals/Education/EducationArcive/EducationArcive";
import CriminalJusticeLayout from "../Layout/CriminalJusticeLayout";
import CriminalJusticeHome from "../Journals/CriminalJustice/CriminalJusticeHome/CriminalJusticeHome";
import CriminalJusticeIssue from "../Journals/CriminalJustice/CriminalJusticeIssue/CriminalJusticeIssue";
import CriminalJusticeScope from "../Journals/CriminalJustice/CriminalJusticeScope/CriminalJusticeScope";
import CriminalJusticeBoard from "../Journals/CriminalJustice/CriminalJusticeBoard/CriminalJusticeBoard";
import CriminalJusticeArcive from "../Journals/CriminalJustice/CriminalJusticeArcive/CriminalJusticeArcive";
import GeographyLayout from "../Layout/GeographyLayout";
import GeographyHome from "../Journals/Geography/GeographyHome/GeographyHome";
import GeographyIssue from "../Journals/Geography/GeographyIssue/GeographyIssue";
import GeographyScope from "../Journals/Geography/GeographyScope/GeographyScope";
import GeographyBoard from "../Journals/Geography/GeographyBoard/GeographyBoard";
import GeographyArcive from "../Journals/Geography/GeographyArcive/GeographyArcive";
import SmallBusinessLayout from "../Layout/SmallBusinessLayout";
import SmallBusinessHome from "../Journals/SmallBusiness/SmallBusinessHome/SmallBusinessHome";
import SmallBusinessIssue from "../Journals/SmallBusiness/SmallBusinessIssue/SmallBusinessIssue";
import SmallBusinessScope from "../Journals/SmallBusiness/SmallBusinessScope/SmallBusinessScope";
import SmallBusinessBoard from "../Journals/SmallBusiness/SmallBusinessBoard/SmallBusinessBoard";
import SmallBusinessArcive from "../Journals/SmallBusiness/SmallBusinessArcive/SmallBusinessArcive";
import ForeignLayout from "../Layout/ForeignLayout";
import ForeignHome from "../Journals/Foreign/ForeignHome/ForeignHome";
import ForeignIssue from "../Journals/Foreign/ForeignIssue/ForeignIssue";
import ForeignScope from "../Journals/Foreign/ForeignScope/ForeignScope";
import ForeignArcive from "../Journals/Foreign/ForeignArcive/ForeignArcive";
import HRMNLayout from "../Layout/HRMNLayout";
import HRMHome from "../Journals/HRM/HRMHome/HRMHome";
import HRMIssue from "../Journals/HRM/HRMIssue/HRMIssue";
import HRMScope from "../Journals/HRM/HRMScope/HRMScope";
import HRMBoard from "../Journals/HRM/HRMBoard/HRMBoard";
import HRMArcive from "../Journals/HRM/HRMArcive/HRMArcive";
import HistoryLayout from "../Layout/HistoryLayout";
import HistoryHome from "../Journals/History/HistoryHome/HistoryHome";
import HistoryIssue from "../Journals/History/HistoryIssue/HistoryIssue";
import HistoryScope from "../Journals/History/HistoryScope/HistoryScope";
import HistoryBoard from "../Journals/History/HistoryBoard/HistoryBoard";
import HistoryArcive from "../Journals/History/HistoryArcive/HistoryArcive";
import HumanRightsLayout from "../Layout/HumanRightsLayout";
import HumanRightsHome from "../Journals/HumanRights/HumanRightsHome/HumanRightsHome";
import HumanRightsIssue from "../Journals/HumanRights/HumanRightsIssue/HumanRightsIssue";
import HumanRightsScope from "../Journals/HumanRights/HumanRightsScope/HumanRightsScope";
import HumanRightsBoard from "../Journals/HumanRights/HumanRightsBoard/HumanRightsBoard";
import HumanRightsArcive from "../Journals/HumanRights/HumanRightsArcive/HumanRightsArcive";
import LinguisticsLayout from "../Layout/LinguisticsLayout";
import LinguisticsHome from "../Journals/Linguistics/LinguisticsHome/LinguisticsHome";
import LinguisticsIssue from "../Journals/Linguistics/LinguisticsIssue/LinguisticsIssue";
import LinguisticsScope from "../Journals/Linguistics/LinguisticsScope/LinguisticsScope";
import LinguisticsBoard from "../Journals/Linguistics/LinguisticsBoard/LinguisticsBoard";
import LinguisticsArcive from "../Journals/Linguistics/LinguisticsArcive/LinguisticsArcive";
import GenderLayout from "../Layout/GenderLayout";
import GenderHome from "../Journals/Gender/GenderHome/GenderHome";
import GenderIssue from "../Journals/Gender/GenderIssue/GenderIssue";
import GenderScope from "../Journals/Gender/GenderScope/GenderScope";
import GenderBoard from "../Journals/Gender/GenderBoard/GenderBoard";
import GenderArcive from "../Journals/Gender/GenderArcive/GenderArcive";
import PublicPolicyLayout from "../Layout/PublicPolicyLayout";
import PublicPolicyHome from "../Journals/PublicPolicy/PublicPolicyHome/PublicPolicyHome";
import PublicPolicyIssue from "../Journals/PublicPolicy/PublicPolicyIssue/PublicPolicyIssue";
import PublicPolicyScope from "../Journals/PublicPolicy/PublicPolicyScope/PublicPolicyScope";
import PublicPolicyBoard from "../Journals/PublicPolicy/PublicPolicyBoard/PublicPolicyBoard";
import PublicPolicyArcive from "../Journals/PublicPolicy/PublicPolicyArcive/PublicPolicyArcive";
import MusicLayout from "../Layout/MusicLayout";
import MusicHome from "../Journals/Music/MusicHome/MusicHome";
import MusicIssue from "../Journals/Music/MusicIssue/MusicIssue";
import MusicScope from "../Journals/Music/MusicScope/MusicScope";
import MusicBoard from "../Journals/Music/MusicBoard/MusicBoard";
import MusicArcive from "../Journals/Music/MusicArcive/MusicArcive";
import NursingLayout from "../Layout/NursingLayout";
import NursingHome from "../Journals/Nursing/NursingHome/NursingHome";
import NursingIssue from "../Journals/Nursing/NursingIssue/NursingIssue";
import NursingScope from "../Journals/Nursing/NursingScope/NursingScope";
import NursingBoard from "../Journals/Nursing/NursingBoard/NursingBoard";
import NursingArcive from "../Journals/Nursing/NursingArcive/NursingArcive";
import SportsLayout from "../Layout/SportsLayout";
import SportsHome from "../Journals/Sports/SportsHome/SportsHome";
import SportsIssue from "../Journals/Sports/SportsIssue/SportsIssue";
import SportsScope from "../Journals/Sports/SportsScope/SportsScope";
import SportsBoard from "../Journals/Sports/SportsBoard/SportsBoard";
import SportsArcive from "../Journals/Sports/SportsArcive/SportsArcive";
import PoliticsLayout from "../Layout/PoliticsLayout";
import PoliticsHome from "../Journals/Politics/PoliticsHome/PoliticsHome";
import PoliticsIssue from "../Journals/Politics/PoliticsIssue/PoliticsIssue";
import PoliticsScope from "../Journals/Politics/PoliticsScope/PoliticsScope";
import PoliticsBoard from "../Journals/Politics/PoliticsBoard/PoliticsBoard";
import PoliticsArcive from "../Journals/Politics/PoliticsArcive/PoliticsArcive";
import CultureLayout from "../Layout/CultureLayout";
import CultureHome from "../Journals/Culture/CultureHome/CultureHome";
import CultureIssue from "../Journals/Culture/CultureIssue/CultureIssue";
import CultureScope from "../Journals/Culture/CultureScope/CultureScope";
import CultureBoard from "../Journals/Culture/CultureBoard/CultureBoard";
import CultureArcive from "../Journals/Culture/CultureArcive/CultureArcive";
import MultilingualLayout from "../Layout/MultilingualLayout";
import MultilingualHome from "../Journals/Multilingual/MultilingualHome/MultilingualHome";
import MultilingualIssue from "../Journals/Multilingual/MultilingualIssue/MultilingualIssue";
import MultilingualScope from "../Journals/Multilingual/MultilingualScope/MultilingualScope";
import MultilingualBoard from "../Journals/Multilingual/MultilingualBoard/MultilingualBoard";
import MultilingualArcive from "../Journals/Multilingual/MultilingualArcive/MultilingualArcive";
import LanguageLayout from "../Layout/LanguageLayout";
import LanguageHome from "../Journals/Language/LanguageHome/LanguageHome";
import LanguageIssue from "../Journals/Language/LanguageIssue/LanguageIssue";
import LanguageScope from "../Journals/Language/LanguageScope/LanguageScope";
import LanguageBoard from "../Journals/Language/LanguageBoard/LanguageBoard";
import LanguageArcive from "../Journals/Language/LanguageArcive/LanguageArcive";
import ManagementLayout from "../Layout/ManagementLayout";
import ManagementHome from "../Journals/Management/ManagementHome/ManagementHome";
import ManagementIssue from "../Journals/Management/ManagementIssue/ManagementIssue";
import ManagementScope from "../Journals/Management/ManagementScope/ManagementScope";
import ManagementBoard from "../Journals/Management/ManagementBoard/ManagementBoard";
import ManagementArcive from "../Journals/Management/ManagementArcive/ManagementArcive";
import MarketingLayout from "../Layout/MarketingLayout";
import MarketingHome from "../Journals/Marketing/MarketingHome/MarketingHome";
import MarketingIssue from "../Journals/Marketing/MarketingIssue/MarketingIssue";
import MarketingScope from "../Journals/Marketing/MarketingScope/MarketingScope";
import MarketingBoard from "../Journals/Marketing/MarketingBoard/MarketingBoard";
import MarketingArcive from "../Journals/Marketing/MarketingArcive/MarketingArcive";
import MedicineLayout from "../Layout/MedicineLayout";
import MedicineHome from "../Journals/Medicine/MedicineHome/MedicineHome";
import MedicineIssue from "../Journals/Medicine/MedicineIssue/MedicineIssue";
import MedicineScope from "../Journals/Medicine/MedicineScope/MedicineScope";
import MedicineBoard from "../Journals/Medicine/MedicineBoard/MedicineBoard";
import MedicineArcive from "../Journals/Medicine/MedicineArcive/MedicineArcive";
import PolicyStudiesLayout from "../Layout/PolicyStudiesLayout";
import PolicyStudiesHome from "../Journals/PolicyStudies/PolicyStudiesHome/PolicyStudiesHome";
import PolicyStudiesIssue from "../Journals/PolicyStudies/PolicyStudiesIssue/PolicyStudiesIssue";
import PolicyStudiesScope from "../Journals/PolicyStudies/PolicyStudiesScope/PolicyStudiesScope";
import PolicyStudiesBoard from "../Journals/PolicyStudies/PolicyStudiesBoard/PolicyStudiesBoard";
import PolicyStudiesArcive from "../Journals/PolicyStudies/PolicyStudiesArcive/PolicyStudiesArcive";
import SociologyLayout from "../Layout/SociologyLayout";
import SociologyHome from "../Journals/Sociology/SociologyHome/SociologyHome";
import SociologyIssue from "../Journals/Sociology/SociologyIssue/SociologyIssue";
import SociologyScope from "../Journals/Sociology/SociologyScope/SociologyScope";
import SociologyBoard from "../Journals/Sociology/SociologyBoard/SociologyBoard";
import SociologyArcive from "../Journals/Sociology/SociologyArcive/SociologyArcive";
import MathematicsLayout from "../Layout/MathematicsLayout";
import MathematicsHome from "../Journals/Mathematics/MathematicsHome/MathematicsHome";
import MathematicsIssue from "../Journals/Mathematics/MathematicsIssue/MathematicsIssue";
import MathematicsScope from "../Journals/Mathematics/MathematicsScope/MathematicsScope";
import MathematicsBoard from "../Journals/Mathematics/MathematicsBoard/MathematicsBoard";
import MathematicsArcive from "../Journals/Mathematics/MathematicsArcive/MathematicsArcive";
import TourismLayout from "../Layout/TourismLayout";
import TourismHome from "../Journals/Tourism/TourismHome/TourismHome";
import TourismIssue from "../Journals/Tourism/TourismIssue/TourismIssue";
import TourismScope from "../Journals/Tourism/TourismScope/TourismScope";
import TourismBoard from "../Journals/Tourism/TourismBoard/TourismBoard";
import TourismArcive from "../Journals/Tourism/TourismArcive/TourismArcive";
import PhysicsLayout from "../Layout/PhysicsLayout";
import PhysicsHome from "../Journals/Physics/PhysicsHome/PhysicsHome";
import PhysicsIssue from "../Journals/Physics/PhysicsIssue/PhysicsIssue";
import PhysicsScope from "../Journals/Physics/PhysicsScope/PhysicsScope";
import PhysicsBoard from "../Journals/Physics/PhysicsBoard/PhysicsBoard";
import PhysicsArcive from "../Journals/Physics/PhysicsArcive/PhysicsArcive";
import PsychologyLayout from "../Layout/PsychologyLayout";
import PsychologyHome from "../Journals/Psychology/PsychologyHome/PsychologyHome";
import PsychologyIssue from "../Journals/Psychology/PsychologyIssue/PsychologyIssue";
import PsychologyScope from "../Journals/Psychology/PsychologyScope/PsychologyScope";
import PsychologyBoard from "../Journals/Psychology/PsychologyBoard/PsychologyBoard";
import PsychologyArcive from "../Journals/Psychology/PsychologyArcive/PsychologyArcive";
import BiologyLayout from "../Layout/BiologyLayout";
import BiologyHome from "../Journals/Biology/BiologyHome/BiologyHome";
import BiologyIssue from "../Journals/Biology/BiologyIssue/BiologyIssue";
import BiologyScope from "../Journals/Biology/BiologyScope/BiologyScope";
import BiologyBoard from "../Journals/Biology/BiologyBoard/BiologyBoard";
import BiologyArcive from "../Journals/Biology/BiologyArcive/BiologyArcive";
import ForeignLagLayout from "../Layout/ForeignLagLayout";
import ForeignLagHome from "../Journals/ForeignLag/ForeignLagHome/ForeignLagHome";
import ForeignLagIssue from "../Journals/ForeignLag/ForeignLagIssue/ForeignLagIssue";
import ForeignLagScope from "../Journals/ForeignLag/ForeignLagScope/ForeignLagScope";
import ForeignLagBoard from "../Journals/ForeignLag/ForeignLagBoard/ForeignLagBoard";
import ForeignLagArcive from "../Journals/ForeignLag/ForeignLagArcive/ForeignLagArcive";
import EcommerceLayout from "../Layout/EcommerceLayout";
import EcommerceHome from "../Journals/Ecommerce/EcommerceHome/EcommerceHome";
import EcommerceIssue from "../Journals/Ecommerce/EcommerceIssue/EcommerceIssue";
import EcommerceScope from "../Journals/Ecommerce/EcommerceScope/EcommerceScope";
import EcommerceBoard from "../Journals/Ecommerce/EcommerceBoard/EcommerceBoard";
import EcommerceArcive from "../Journals/Ecommerce/EcommerceArcive/EcommerceArcive";
import ContemporaryLayout from "../Layout/ContemporaryLayout";
import ContemporaryHome from "../Journals/Contemporary/ContemporaryHome/ContemporaryHome";
import ContemporaryIssue from "../Journals/Contemporary/ContemporaryIssue/ContemporaryIssue";
import ContemporaryScope from "../Journals/Contemporary/ContemporaryScope/ContemporaryScope";
import ContemporaryBoard from "../Journals/Contemporary/ContemporaryBoard/ContemporaryBoard";
import ContemporaryArcive from "../Journals/Contemporary/ContemporaryArcive/ContemporaryArcive";
import InternationalLayout from "../Layout/InternationalLayout";
import InternationalHome from "../Journals/International/InternationalHome/InternationalHome";
import InternationalIssue from "../Journals/International/InternationalIssue/InternationalIssue";
import InternationalScope from "../Journals/International/InternationalScope/InternationalScope";
import InternationalBoard from "../Journals/International/InternationalBoard/InternationalBoard";
import InternationalArcive from "../Journals/International/InternationalArcive/InternationalArcive";
import HealthLayout from "../Layout/HealthLayout";
import HealthHome from "../Journals/Health/HealthHome/HealthHome";
import HealthIssue from "../Journals/Health/HealthIssue/HealthIssue";
import HealthScope from "../Journals/Health/HealthScope/HealthScope";
import HealthBoard from "../Journals/Health/HealthBoard/HealthBoard";
import HealthArcive from "../Journals/Health/HealthArcive/HealthArcive";
import HumanitiesLayout from "../Layout/HumanitiesLayout";
import HumanitiesHome from "../Journals/Humanities/HumanitiesHome/HumanitiesHome";
import HumanitiesIssue from "../Journals/Humanities/HumanitiesIssue/HumanitiesIssue";
import HumanitiesScope from "../Journals/Humanities/HumanitiesScope/HumanitiesScope";
import HumanitiesBoard from "../Journals/Humanities/HumanitiesBoard/HumanitiesBoard";
import HumanitiesArcive from "../Journals/Humanities/HumanitiesArcive/HumanitiesArcive";
import IslamicLayout from "../Layout/IslamicLayout";
import IslamicHome from "../Journals/Islamic/IslamicHome/IslamicHome";
import IslamicIssue from "../Journals/Islamic/IslamicIssue/IslamicIssue";
import IslamicScope from "../Journals/Islamic/IslamicScope/IslamicScope";
import IslamicBoard from "../Journals/Islamic/IslamicBoard/IslamicBoard";
import IslamicArcive from "../Journals/Islamic/IslamicArcive/IslamicArcive";
import JournalismLayout from "../Layout/JournalismLayout";
import JournalismHome from "../Journals/Journalism/JournalismHome/JournalismHome";
import JournalismIssue from "../Journals/Journalism/JournalismIssue/JournalismIssue";
import JournalismScope from "../Journals/Journalism/JournalismScope/JournalismScope";
import JournalismBoard from "../Journals/Journalism/JournalismBoard/JournalismBoard";
import JournalismArcive from "../Journals/Journalism/JournalismArcive/JournalismArcive";
import SocialLayout from "../Layout/SocialLayout";
import SocialHome from "../Journals/Social/SocialHome/SocialHome";
import SocialIssue from "../Journals/Social/SocialIssue/SocialIssue";
import SocialScope from "../Journals/Social/SocialScope/SocialScope";
import SocialBoard from "../Journals/Social/SocialBoard/SocialBoard";
import SocialArcive from "../Journals/Social/SocialArcive/SocialArcive";
import NaturalLayout from "../Layout/NaturalLayout";
import NaturalHome from "../Journals/Natural/NaturalHome/NaturalHome";
import NaturalIssue from "../Journals/Natural/NaturalIssue/NaturalIssue";
import NaturalScope from "../Journals/Natural/NaturalScope/NaturalScope";
import NaturalBoard from "../Journals/Natural/NaturalBoard/NaturalBoard";
import NaturalArcive from "../Journals/Natural/NaturalArcive/NaturalArcive";
import PhilosophyLayout from "../Layout/PhilosophyLayout";
import PhilosophyHome from "../Journals/Philosophy/PhilosophyHome/PhilosophyHome";
import CompletedList from "../ListJournals/CompletedList/CompletedList";
import BusinessGeneralLayout from "../Layout/BusinessGeneralLayout";
import BusinessGeneralHome from "../Journals/BusinessGeneral/BusinessGeneralHome/BusinessGeneralHome";
import BusinessGeneralIssue from "../Journals/BusinessGeneral/BusinessGeneralIssue/BusinessGeneralIssue";
import BusinessGeneralScope from "../Journals/BusinessGeneral/BusinessGeneralScope/BusinessGeneralScope";
import BusinessGeneralBoard from "../Journals/BusinessGeneral/BusinessGeneralBoard/BusinessGeneralBoard";
import BusinessGeneralArcive from "../Journals/BusinessGeneral/BusinessGeneralArcive/BusinessGeneralArcive";
import HumanitiesGeneralLayout from "../Layout/HumanitiesGeneralLayout";
import HumanitiesGeneralHome from "../Journals/HumanitiesGeneral/HumanitiesGeneralHome/HumanitiesGeneralHome";
import HumanitiesGeneralIssue from "../Journals/HumanitiesGeneral/HumanitiesGeneralIssue/HumanitiesGeneralIssue";
import HumanitiesGeneralScope from "../Journals/HumanitiesGeneral/HumanitiesGeneralScope/HumanitiesGeneralScope";
import HumanitiesGeneralBoard from "../Journals/HumanitiesGeneral/HumanitiesGeneralBoard/HumanitiesGeneralBoard";
import HumanitiesGeneralArcive from "../Journals/HumanitiesGeneral/HumanitiesGeneralArcive/HumanitiesGeneralArcive";
import TechnologyLayout from "../Layout/TechnologyLayout";
import TechnologyHome from "../Journals/Technology/TechnologyHome/TechnologyHome";
import TechnologyIssue from "../Journals/Technology/TechnologyIssue/TechnologyIssue";
import TechnologyScope from "../Journals/Technology/TechnologyScope/TechnologyScope";
import TechnologyBoard from "../Journals/Technology/TechnologyBoard/TechnologyBoard";
import TechnologyArcive from "../Journals/Technology/TechnologyArcive/TechnologyArcive";
import ContemporaryGeneralLayout from "../Layout/ContemporaryGeneralLayout";
import ContemporaryGeneralHome from "../Journals/ContemporaryGeneral/ContemporaryGeneralHome/ContemporaryGeneralHome";
import ContemporaryGeneralIssue from "../Journals/ContemporaryGeneral/ContemporaryGeneralIssue/ContemporaryGeneralIssue";
import ContemporaryGeneralScope from "../Journals/ContemporaryGeneral/ContemporaryGeneralScope/ContemporaryGeneralScope";
import ContemporaryGeneralBoard from "../Journals/ContemporaryGeneral/ContemporaryGeneralBoard/ContemporaryGeneralBoard";
import ContemporaryGeneralArcive from "../Journals/ContemporaryGeneral/ContemporaryGeneralArcive/ContemporaryGeneralArcive";
import BUTLayout from "../Layout/BUTLayout";
import BUTHome from "../Journals/BUT/BUTHome/BUTHome";
import BUTIssue from "../Journals/BUT/BUTIssue/BUTIssue";
import BUTScope from "../Journals/BUT/BUTScope/BUTScope";
import BUTBoard from "../Journals/BUT/BUTBoard/BUTBoard";
import BUTArcive from "../Journals/BUT/BUTArcive/BUTArcive";
import SocialGeneralLayout from "../Layout/SocialGeneralLayout";
import SocialGeneralHome from "../Journals/SocialGeneral/SocialGeneralHome/SocialGeneralHome";
import SocialGeneralIssue from "../Journals/SocialGeneral/SocialGeneralIssue/SocialGeneralIssue";
import SocialGeneralScope from "../Journals/SocialGeneral/SocialGeneralScope/SocialGeneralScope";
import SocialGeneralBoard from "../Journals/SocialGeneral/SocialGeneralBoard/SocialGeneralBoard";
import SocialGeneralArcive from "../Journals/SocialGeneral/SocialGeneralArcive/SocialGeneralArcive";
import EconomicPolicyLayout from "../Layout/EconomicPolicyLayout";
import EconomicPolicyHome from "../Journals/EconomicPolicy/EconomicPolicyHome/EconomicPolicyHome";
import EconomicPolicyIssue from "../Journals/EconomicPolicy/EconomicPolicyIssue/EconomicPolicyIssue";
import EconomicPolicyScope from "../Journals/EconomicPolicy/EconomicPolicyScope/EconomicPolicyScope";
import EconomicPolicyBoard from "../Journals/EconomicPolicy/EconomicPolicyBoard/EconomicPolicyBoard";
import EconomicPolicyArcive from "../Journals/EconomicPolicy/EconomicPolicyArcive/EconomicPolicyArcive";
import EducationPolicyLayout from "../Layout/EducationPolicyLayout";
import EducationPolicyHome from "../Journals/EducationPolicy/EducationPolicyHome/EducationPolicyHome";
import EducationPolicyIssue from "../Journals/EducationPolicy/EducationPolicyIssue/EducationPolicyIssue";
import EducationPolicyScope from "../Journals/EducationPolicy/EducationPolicyScope/EducationPolicyScope";
import EducationPolicyBoard from "../Journals/EducationPolicy/EducationPolicyBoard/EducationPolicyBoard";
import EducationPolicyArcive from "../Journals/EducationPolicy/EducationPolicyArcive/EducationPolicyArcive";
import LifeLayout from "../Layout/LifeLayout";
import LifeHome from "../Journals/Life/LifeHome/LifeHome";
import LifeIssue from "../Journals/Life/LifeIssue/LifeIssue";
import LifeScope from "../Journals/Life/LifeScope/LifeScope";
import LifeBoard from "../Journals/Life/LifeBoard/LifeBoard";
import LifeArcive from "../Journals/Life/LifeArcive/LifeArcive";
import LinguisticsCpiLayout from "../Layout/LinguisticsCpiLayout";
import LinguisticsCpiHome from "../Journals/LinguisticsCpi/LinguisticsCpiHome/LinguisticsCpiHome";
import LinguisticsCpiIssue from "../Journals/LinguisticsCpi/LinguisticsCpiIssue/LinguisticsCpiIssue";
import LinguisticsCpiScope from "../Journals/LinguisticsCpi/LinguisticsCpiScope/LinguisticsCpiScope";
import LinguisticsCpiBoard from "../Journals/LinguisticsCpi/LinguisticsCpiBoard/LinguisticsCpiBoard";
import LinguisticsCpiArcive from "../Journals/LinguisticsCpi/LinguisticsCpiArcive/LinguisticsCpiArcive";
import PeaceLayout from "../Layout/PeaceLayout";
import PeaceHome from "../Journals/Peace/PeaceHome/PeaceHome";
import PeaceIssue from "../Journals/Peace/PeaceIssue/PeaceIssue";
import PeaceScope from "../Journals/Peace/PeaceScope/PeaceScope";
import PeaceBoard from "../Journals/Peace/PeaceBoard/PeaceBoard";
import PeaceArcive from "../Journals/Peace/PeaceArcive/PeaceArcive";
import PhilosophyIssue from "../Journals/Philosophy/PhilosophyIssue/PhilosophyIssue";
import PhilosophyScope from "../Journals/Philosophy/PhilosophyScope/PhilosophyScope";
import PhilosophyBoard from "../Journals/Philosophy/PhilosophyBoard/PhilosophyBoard";
import PhilosophyArcive from "../Journals/Philosophy/PhilosophyArcive/PhilosophyArcive";
import ForeignBoard from "../Journals/Foreign/ForeignBoard/ForeignBoard";
import StrategicLayout from "../Layout/StrategicLayout";
import StrategicHome from "../Journals/Strategic/StrategicHome/StrategicHome";
import StrategicIssue from "../Journals/Strategic/StrategicIssue/StrategicIssue";
import StrategicScope from "../Journals/Strategic/StrategicScope/StrategicScope";
import StrategicBoard from "../Journals/Strategic/StrategicBoard/StrategicBoard";
import StrategicArcive from "../Journals/Strategic/StrategicArcive/StrategicArcive";
import LibraryLayout from "../Layout/LibraryLayout";
import LibraryHome from "../Journals/Library/LibraryHome/LibraryHome";
import LibraryIssue from "../Journals/Library/LibraryIssue/LibraryIssue";
import LibraryScope from "../Journals/Library/LibraryScope/LibraryScope";
import LibraryBoard from "../Journals/Library/LibraryBoard/LibraryBoard";
import LibraryArcive from "../Journals/Library/LibraryArcive/LibraryArcive";
import ScienceReviewLayout from "../Layout/ScienceReviewLayout";
import ScienceReviewIssue from "../Journals/ScienceReview/ScienceReviewIssue/ScienceReviewIssue";
import ScienceReviewHome from "../Journals/ScienceReview/ScienceReviewHome/ScienceReviewHome";
import ScienceReviewScope from "../Journals/ScienceReview/ScienceReviewScope/ScienceReviewScope";
import ScienceReviewBoard from "../Journals/ScienceReview/ScienceReviewBoard/ScienceReviewBoard";
import ScienceReviewArcive from "../Journals/ScienceReview/ScienceReviewArcive/ScienceReviewArcive";
import BusinessReviewsLayout from "../Layout/BusinessReviewsLayout";
import BusinessReviewsHome from "../Journals/BusinessReviews/BusinessReviewsHome/BusinessReviewsHome";
import BusinessReviewsIssue from "../Journals/BusinessReviews/BusinessReviewsIssue/BusinessReviewsIssue";
import BusinessReviewsScope from "../Journals/BusinessReviews/BusinessReviewsScope/BusinessReviewsScope";
import BusinessReviewsBoard from "../Journals/BusinessReviews/BusinessReviewsBoard/BusinessReviewsBoard";
import BusinessReviewsArcive from "../Journals/BusinessReviews/BusinessReviewsArcive/BusinessReviewsArcive";
import EconomicsArcive from "../Journals/Economics/EconomicsArcive/EconomicsArcive";
import JaesArcive from "../Journals/Agriculture/JaesArcive/JaesArcive";
import SubmitForm from "../SubmitForm/SubmitForm";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/subjects",
                element: <Subjects></Subjects>
            },
            {
                path:"/submit",
                element:<SubmitForm></SubmitForm>
            },
            {
                path: "/compltedlist",
                element: <CompletedList></CompletedList>
            },
            {
                path: "/research",
                element: <ResearchPage></ResearchPage>
            },
            {
                path: "/research_details",
                element: <ResearchDetails></ResearchDetails>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/membership",
                element:<MemberShipPage></MemberShipPage>
            },
            {
                path: "/contact",
                element:<ContactPage></ContactPage>
            },
            {
                path:"/information",
                element:<CenterLayout></CenterLayout>,
                children:[
                    {
                        path:"/information/submission",
                        element:<CenterSubmission></CenterSubmission>
                    },
                    {
                        path:"/information/resources",
                        element:<CenterResources></CenterResources>
                    },
                    {
                        path:"/information/policies",
                        element:<CenterPolicy></CenterPolicy>
                    },
                    {
                        path:"/information/usefull_link",
                        element:<CenterLink></CenterLink>
                    },
                    {
                        path:"/information/latest_activities",
                        element:<CenterActivities></CenterActivities>
                    },
                    {
                        path:"/information/subcription",
                        element:<CenterSubcription></CenterSubcription>
                    },
                    {
                        path:"/information/information",
                        element:<CenterInfixedformation></CenterInfixedformation>
                    },
                    {
                        path:"/information/index",
                        element:<CenterIndex></CenterIndex>
                    },
                ]
            },
            {
                path: "/submisson",
                element:<FixedSubmisson></FixedSubmisson>
            },
            {
                path: "/resources",
                element:<FixedResources></FixedResources>
            },
            {
                path: "/polices",
                element:<FixedPolicy></FixedPolicy>
            },
            {
                path: "/usefull_link",
                element:<FixedUseFullLink></FixedUseFullLink>
            },
            {
                path: "/privecy_policy",
                element:<Privecy></Privecy>
            },
            {
                path: "/accessibility",
                element:<Accessibility></Accessibility>
            },

            {
                path:"/Ijatnet",
                element:<AccountingLayout></AccountingLayout>,
                children:[
                    {
                        path:"/Ijatnet",
                        element:<AccountingHome></AccountingHome>
                    },
                    {
                        path:"/Ijatnet/current-ijat",
                        element:<AccountingCurrentIssue></AccountingCurrentIssue>
                    },
                    {
                        path:"/Ijatnet/scope-ijat",
                        element:<AccountingScope></AccountingScope>
                    },
                    {
                        path:"/Ijatnet/editorial-board",
                        element:<AccountingBoard></AccountingBoard>
                    },
                    {
                        path:"/Ijatnet/subscription",
                        element:<AccountingSubmision></AccountingSubmision>
                    },
                    {
                        path:"/Ijatnet/resources",
                        element:<AccountingResouch></AccountingResouch>
                    },
                    {
                        path:"/Ijatnet/policies",
                        element:<AccountingPolice></AccountingPolice>
                    },
                    {
                        path:"/Ijatnet/usefull_link",
                        element:<AccountingUsefullLinks></AccountingUsefullLinks>
                    },
                    {
                        path:"/Ijatnet/latest_activities",
                        element:<AccountingActivities></AccountingActivities>
                    },
                    {
                        path:"/Ijatnet/subcription",
                        element:<AccountingSubcription></AccountingSubcription>
                    },
                    {
                        path:"/Ijatnet/information",
                        element:<AccountingInfo></AccountingInfo>
                    },
                    {
                        path:"/Ijatnet/index",
                        element:<AccountingIndex></AccountingIndex>
                    },
                    {
                        path:"/Ijatnet/archive-ijat",
                        element:<AccountingArcrive></AccountingArcrive>
                    },
                ]
            },

            {
                path:"/jaes",
                element:<AgricultureLayout></AgricultureLayout>,
                children:[
                    {
                        path:"/jaes",
                        element:<JaesHome></JaesHome>
                    },
                    {
                        path:"/jaes/current-jaes",
                        element:<JaesCurrentIssu></JaesCurrentIssu>
                    },
                    {
                        path:"/jaes/scope-jaes",
                        element:<JaesScope></JaesScope>
                    },
                    {
                        path:"/jaes/editorial-board",
                        element:<JaesEditor></JaesEditor>
                    },
                    {
                        path:"/jaes/subscription",
                        element:<JaesSubcription></JaesSubcription>
                    },
                    {
                        path:"/jaes/resources",
                        element:<JaesResources></JaesResources>
                    },
                    {
                        path:"/jaes/policies",
                        element:<JaesPolicy></JaesPolicy>
                    },
                    {
                        path:"/jaes/usefull_link",
                        element:<JaesUsefullLink></JaesUsefullLink>
                    },
                    {
                        path:"/jaes/latest_activities",
                        element:<JaesActivites></JaesActivites>
                    },
                    {
                        path:"/jaes/submission",
                        element:<JaesSubmission></JaesSubmission>
                    },
                    {
                        path:"/jaes/archive-ijat",
                        element:<JaesArcive></JaesArcive>
                    },
                ]
            },

            {
                path:"/jea",
                element:<EngineeringLayout></EngineeringLayout>,
                children:[
                    {
                        path:"/jea",
                        element:<JeaHome></JeaHome>
                    },
                    {
                        path:"/jea/current-jea",
                        element:<JeaCurrentIssue></JeaCurrentIssue>
                    },
                    {
                        path:"/jea/scope-jea",
                        element:<JeaScope></JeaScope>
                    },
                    {
                        path:"/jea/editorial-board",
                        element:<JeaBoard></JeaBoard>
                    },
                    {
                        path:"/jea/submission",
                        element:<JeaSubmission></JeaSubmission>
                    },
                    {
                        path:"/jea/resources",
                        element:<JeaResources></JeaResources>
                    },
                    {
                        path:"/jea/policies",
                        element:<JeaPolicy></JeaPolicy>
                    },
                    {
                        path:"/jea/usefull_link",
                        element:<JeaUsefullLink></JeaUsefullLink>
                    },
                    {
                        path:"/jea/latest_activities",
                        element:<JeaActivities></JeaActivities>
                    },
                    {
                        path:"/jea/subcription",
                        element:<JeaSubcription></JeaSubcription>
                    },
                    {
                        path:"/jea/information",
                        element:<JeaInformation></JeaInformation>
                    },
                    {
                        path:"/jea/index",
                        element:<JeoIndex></JeoIndex>
                    },
                    {
                        path:"/jea/archive-ijat",
                        element:<JeoLoadArcive></JeoLoadArcive>
                    },
                ]
            },

            {
                path:"/jaa",
                element:<ArchaeologyLayout></ArchaeologyLayout>,
                children:[
                    {
                        path:"/jaa",
                        element:<ArchaeologyHome></ArchaeologyHome>
                    },
                    {
                        path:"/jaa/current-jaa",
                        element:<ArchaeologyCurrentIssu></ArchaeologyCurrentIssu>
                    },
                    {
                        path:"/jaa/scope-jaa",
                        element:<ArchaeologyScope></ArchaeologyScope>
                    },
                    {
                        path:"/jaa/editorial-board",
                        element:<ArchaeologyBoard></ArchaeologyBoard>
                    },
                    {
                        path:"/jaa/archive-jaa",
                        element:<ArchaeologyAricive></ArchaeologyAricive>
                    },
                ]
            },

            {
                path:"/ijaah",
                element:<ArtHistoryLayout></ArtHistoryLayout>,
                children:[
                    {
                        path:"/ijaah",
                        element:<ArtHistoryHome></ArtHistoryHome>
                    },
                    {
                        path:"/ijaah/current-ijaah",
                        element:<ArtHistoryCurrentIssu></ArtHistoryCurrentIssu>
                    },
                    {
                        path:"/ijaah/scope-ijaah",
                        element:<ArtHistoryScope></ArtHistoryScope>
                    },
                    {
                        path:"/ijaah/editorial-board",
                        element:<ArtHistoryBoard></ArtHistoryBoard>
                    },
                    {
                        path:"/ijaah/subscription",
                        element:<ArtHistorySubmissoin></ArtHistorySubmissoin>
                    },
                    {
                        path:"/ijaah/resources",
                        element:<ArtHistoryResourches></ArtHistoryResourches>
                    },
                    {
                        path:"/ijaah/policies",
                        element:<ArtHistoryPolicy></ArtHistoryPolicy>
                    },
                    {
                        path:"/ijaah/usefull_link",
                        element:<ArtHistoryUsefullLink></ArtHistoryUsefullLink>
                    },
                    {
                        path:"/ijaah/latest_activities",
                        element:<ArtHistoryUsefullLink></ArtHistoryUsefullLink>
                    },
                    {
                        path:"/ijaah/subcription",
                        element:<ArtHistorySubcription></ArtHistorySubcription>
                    },
                    {
                        path:"/ijaah/information",
                        element:<ArtHistoryInformation></ArtHistoryInformation>
                    },
                    {
                        path:"/ijaah/index",
                        element:<ArtHistoryIndex></ArtHistoryIndex>
                    },
                    {
                        path:"/ijaah/archive-ijaah",
                        element:<ArtHistoryArcive></ArtHistoryArcive>
                    },
                ]
            },

            {
                path:"/jfbm",
                element:<BankManagementLayout></BankManagementLayout>,
                children:[
                    {
                        path:"/jfbm",
                        element:<BankManagementHome></BankManagementHome>
                    },
                    {
                        path:"/jfbm/current-jfbm",
                        element:<BankManagementIssue></BankManagementIssue>
                    },
                    {
                        path:"/jfbm/scope-jfbm",
                        element:<BankManagementScope></BankManagementScope>
                    },
                    {
                        path:"/jfbm/editorial-board",
                        element:<BankManagementBoard></BankManagementBoard>
                    },
                    {
                        path:"/jfbm/archive-jfbm",
                        element:<BankManagementArcive></BankManagementArcive>
                    },
                ]
            },

            {
                path:"/jcb",
                element:<BiochemistryLayout></BiochemistryLayout>,
                children:[
                    {
                        path:"/jcb",
                        element:<BiochemistryHome></BiochemistryHome> 
                    },
                    {
                        path:"/jcb/current-jcb",
                        element:<BiochemistryIssue></BiochemistryIssue>
                    },
                    {
                        path:"/jcb/scope-jcb",
                        element:<BiochemistryScope></BiochemistryScope>
                    },
                    {
                        path:"/jcb/editorial-board",
                        element:<BiochemistryBoard></BiochemistryBoard>
                    },
                    {
                        path:"/jcb/archive-jcb",
                        element:<BiochemistryArcive></BiochemistryArcive>
                    },
                ]
            },

            {
                path:"/jble",
                element:<BusinessEthicsLayout></BusinessEthicsLayout>,
                children:[
                    {
                        path:"/jble",
                        element:<BusinessEthicsHome></BusinessEthicsHome>
                    },
                    {
                        path:"/jble/current-jble",
                        element:<BusinessEthicsIssue></BusinessEthicsIssue>
                    },
                    {
                        path:"/jble/scope-jble",
                        element:<BusinessEthicsScope></BusinessEthicsScope>
                    },
                    {
                        path:"/jble/editorial-board",
                        element:<BusinessEthicsBoard></BusinessEthicsBoard>
                    },
                    {
                        path:"/jble/archive-jble",
                        element:<BusinessEthicsArcive></BusinessEthicsArcive>
                    },
                ]
            },

            {
                path:"/jcsit",
                element:<ComputerScienceLayout></ComputerScienceLayout>,
                children:[
                    {
                        path:"/jcsit",
                        element:<ComputerScienceHome></ComputerScienceHome>
                    },
                    {
                        path:"/jcsit/current-jcsit",
                        element:<ComputerScienceIssue></ComputerScienceIssue>
                    },
                    {
                        path:"/jcsit/scope-jcsit",
                        element:<ComputerScienceScope></ComputerScienceScope>
                    },
                    {
                        path:"/jcsit/editorial-board",
                        element:<ComputerScienceBoard></ComputerScienceBoard>
                    },
                    {
                        path:"/jcsit/archive-jcsit",
                        element:<ComputerScienceArcive></ComputerScienceArcive>
                    },
                ]
            },

            {
                path:"/jeds",
                element:<EconomicsLayout></EconomicsLayout>,
                children:[
                    {
                        path:"/jeds",
                        element:<EconomicsHome></EconomicsHome>
                    },
                    {
                        path:"/jeds/current-jeds",
                        element:<EconomicsIssue></EconomicsIssue>
                    },
                    {
                        path:"/jeds/scope-jeds",
                        element:<EconomicsScope></EconomicsScope>
                    },
                    {
                        path:"/jeds/editorial-board",
                        element:<EconomicsBoard></EconomicsBoard>
                    },
                    {
                        path:"/jeds/archive-jeds",
                        element:<EconomicsArcive></EconomicsArcive>
                    },
                ]
            },

            {
                path:"/jehd",
                element:<EducationLayout></EducationLayout>,
                children:[
                    {
                        path:"/jehd",
                        element:<EducationHome></EducationHome>
                    },
                    {
                        path:"/jehd/current-jehd",
                        element:<EducationIssue></EducationIssue>
                    },
                    {
                        path:"/jehd/scope-jehd",
                        element:<EducationScope></EducationScope>
                    },
                    {
                        path:"/jehd/editorial-board",
                        element:<EducationBoard></EducationBoard>
                    },
                    {
                        path:"/jehd/archive-jed",
                        element:<EducationArcive></EducationArcive>
                    },
                ]
            },

            {
                path:"/jlcj",
                element:<CriminalJusticeLayout></CriminalJusticeLayout>,
                children:[
                    {
                        path:"/jlcj",
                        element:<CriminalJusticeHome></CriminalJusticeHome>
                    },
                    {
                        path:"/jlcj/current-jlcj",
                        element:<CriminalJusticeIssue></CriminalJusticeIssue>
                    },
                    {
                        path:"/jlcj/scope-jlcj",
                        element:<CriminalJusticeScope></CriminalJusticeScope>
                    },
                    {
                        path:"/jlcj/editorial-board",
                        element:<CriminalJusticeBoard></CriminalJusticeBoard>
                    },
                    {
                        path:"/jlcj/archive-jlcj",
                        element:<CriminalJusticeArcive></CriminalJusticeArcive>
                    },
                ]
            },

            {
                path:"/jges",
                element:<GeographyLayout></GeographyLayout>,
                children:[
                    {
                        path:"/jges",
                        element:<GeographyHome></GeographyHome> 
                    },
                    {
                        path:"/jges/current-jges",
                        element:<GeographyIssue></GeographyIssue>
                    },
                    {
                        path:"/jges/scope-jges",
                        element:<GeographyScope></GeographyScope>
                    },
                    {
                        path:"/jges/editorial-board",
                        element:<GeographyBoard></GeographyBoard>
                    },
                    {
                        path:"/jges/archive-jges",
                        element:<GeographyArcive></GeographyArcive>
                    },
                ]
            },

            {
                path:"/jsbed",
                element:<SmallBusinessLayout></SmallBusinessLayout>,
                children:[
                    {
                        path:"/jsbed",
                        element:<SmallBusinessHome></SmallBusinessHome>
                    },
                    {
                        path:"/jsbed/current-jsbed",
                        element:<SmallBusinessIssue></SmallBusinessIssue>
                    },
                    {
                        path:"/jsbed/scope-jsbed",
                        element:<SmallBusinessScope></SmallBusinessScope>
                    },
                    {
                        path:"/jsbed/editorial-board",
                        element:<SmallBusinessBoard></SmallBusinessBoard>
                    },
                    {
                        path:"/jsbed/archive-jsbed",
                        element:<SmallBusinessArcive></SmallBusinessArcive>
                    },
                ]
            },

            {
                path:"/jirfp",
                element:<ForeignLayout></ForeignLayout>,
                children:[
                    {
                        path:"/jirfp",
                        element:<ForeignHome></ForeignHome>
                    },
                    {
                        path:"/jirfp/current-jirfp",
                        element:<ForeignIssue></ForeignIssue>
                    },
                    {
                        path:"/jirfp/scope-jirfp",
                        element:<ForeignScope></ForeignScope>
                    },
                    {
                        path:"/jirfp/editorial-board",
                        element:<ForeignBoard></ForeignBoard>
                    },
                    {
                        path:"/jirfp/archive-jirfp",
                        element:<ForeignArcive></ForeignArcive>
                    },
                ]
            },

            {
                path:"/jhrmls",
                element:<HRMNLayout></HRMNLayout>,
                children:[
                    {
                        path:"/jhrmls",
                        element:<HRMHome></HRMHome>
                    },
                    {
                        path:"/jhrmls/current-jhrmls",
                        element:<HRMIssue></HRMIssue>
                    },
                    {
                        path:"/jhrmls/scope-jhrmls",
                        element:<HRMScope></HRMScope>
                    },
                    {
                        path:"/jhrmls/editorial-board",
                        element:<HRMBoard></HRMBoard>
                    },
                    {
                        path:"/jhrmls/archive-jhrmls",
                        element:<HRMArcive></HRMArcive>
                    },
                ]
            },

            {
                path:"/rhps",
                element:<HistoryLayout></HistoryLayout>,
                children:[
                    {
                        path:"/rhps",
                        element:<HistoryHome></HistoryHome> 
                    },
                    {
                        path:"/rhps/current-rhps",
                        element:<HistoryIssue></HistoryIssue> 
                    },
                    {
                        path:"/rhps/scope-rhps",
                        element:<HistoryScope></HistoryScope>
                    },
                    {
                        path:"/rhps/editorial-board",
                        element:<HistoryBoard></HistoryBoard>
                    },
                    {
                        path:"/rhps/archive-rhps",
                        element:<HistoryArcive></HistoryArcive>
                    },
                ]
            },

            {
                path:"/jswhr",
                element:<HumanRightsLayout></HumanRightsLayout>,
                children:[
                    {
                        path:"/jswhr",
                        element:<HumanRightsHome></HumanRightsHome>
                    },
                    {
                        path:"/jswhr/current-jswhr",
                        element:<HumanRightsIssue></HumanRightsIssue>
                    },
                    {
                        path:"/jswhr/scope-jswhr",
                        element:<HumanRightsScope></HumanRightsScope>
                    },
                    {
                        path:"/jswhr/editorial-board",
                        element:<HumanRightsBoard></HumanRightsBoard>
                    },
                    {
                        path:"/jswhr/archive-jswhr",
                        element:<HumanRightsArcive></HumanRightsArcive>
                    },
                ]
            },

            {
                path:"/ijlc",
                element:<LinguisticsLayout></LinguisticsLayout>,
                children:[
                    {
                        path:"/ijlc",
                        element:<LinguisticsHome></LinguisticsHome>
                    },
                    {
                        path:"/ijlc/current-ijlc",
                        element:<LinguisticsIssue></LinguisticsIssue>
                    },
                    {
                        path:"/ijlc/scope-ijlc",
                        element:<LinguisticsScope></LinguisticsScope>
                    },
                    {
                        path:"/ijlc/editorial-board",
                        element:<LinguisticsBoard></LinguisticsBoard>
                    },
                    {
                        path:"/ijlc/editorial-board",
                        element:<LinguisticsBoard></LinguisticsBoard>
                    },
                    {
                        path:"/ijlc/archive-ijlc",
                        element:<LinguisticsArcive></LinguisticsArcive>
                    },
                ]
            },

            {
                path:"/ijgws",
                element:<GenderLayout></GenderLayout>,
                children:[
                    {
                        path:"/ijgws",
                        element:<GenderHome></GenderHome>
                    },
                    {
                        path:"/ijgws/current-ijgws",
                        element:<GenderIssue></GenderIssue>
                    },
                    {
                        path:"/ijgws/scope-ijgws",
                        element:<GenderScope></GenderScope>
                    },
                    {
                        path:"/ijgws/editorial-board",
                        element:<GenderBoard></GenderBoard>
                    },
                    {
                        path:"/ijgws/archive-ijgws",
                        element:<GenderArcive></GenderArcive>
                    },
                ]
            },

            {
                path:"/ppar",
                element:<PublicPolicyLayout></PublicPolicyLayout>,
                children:[
                    {
                        path:"/ppar",
                        element:<PublicPolicyHome></PublicPolicyHome>
                    },
                    {
                        path:"/ppar/current-ppar",
                        element:<PublicPolicyIssue></PublicPolicyIssue>
                    },
                    {
                        path:"/ppar/scope-ppar",
                        element:<PublicPolicyScope></PublicPolicyScope>
                    },
                    {
                        path:"/ppar/editorial-board",
                        element:<PublicPolicyBoard></PublicPolicyBoard>
                    },
                    {
                        path:"/ppar/archive-ppar",
                        element:<PublicPolicyArcive></PublicPolicyArcive>
                    },
                ]
            },

            {
                path:"/ijmpa",
                element:<MusicLayout></MusicLayout>,
                children:[
                    {
                        path:"/ijmpa",
                        element:<MusicHome></MusicHome>
                    },
                    {
                        path:"/ijmpa/current-ijmpa",
                        element:<MusicIssue></MusicIssue>
                    },
                    {
                        path:"/ijmpa/scope-ijmpa",
                        element:<MusicScope></MusicScope>
                    },
                    {
                        path:"/ijmpa/editorial-board",
                        element:<MusicBoard></MusicBoard>
                    },
                    {
                        path:"/ijmpa/archive-ijmpa",
                        element:<MusicArcive></MusicArcive>
                    },
                ]
            },

            {
                path:"/ijn",
                element:<NursingLayout></NursingLayout>,
                children:[
                    {
                        path:"/ijn",
                        element:<NursingHome></NursingHome>
                    },
                    {
                        path:"/ijn/current-ijn",
                        element:<NursingIssue></NursingIssue>
                    },
                    {
                        path:"/ijn/scope-ijn",
                        element:<NursingScope></NursingScope>
                    },
                    {
                        path:"/ijn/editorial-board",
                        element:<NursingBoard></NursingBoard>
                    },
                    {
                        path:"/ijn/archive-ijn",
                        element:<NursingArcive></NursingArcive>
                    },
                ]
            },

            {
                path:"/jpesm",
                element:<SportsLayout></SportsLayout>,
                children:[
                    {
                        path:"/jpesm",
                        element:<SportsHome></SportsHome>
                    },
                    {
                        path:"/jpesm/current-jpesm",
                        element:<SportsIssue></SportsIssue>
                    },
                    {
                        path:"/jpesm/scope-jpesm",
                        element:<SportsScope></SportsScope>
                    },
                    {
                        path:"/jpesm/editorial-board",
                        element:<SportsBoard></SportsBoard>
                    },
                    {
                        path:"/jpesm/archive-jpesm",
                        element:<SportsArcive></SportsArcive>
                    },
                ]
            },

            {
                path:"/jppg",
                element:<PoliticsLayout></PoliticsLayout>,
                children:[
                    {
                        path:"/jppg",
                        element:<PoliticsHome></PoliticsHome>
                    },
                    {
                        path:"/jppg/current-jppg",
                        element:<PoliticsIssue></PoliticsIssue>
                    },
                    {
                        path:"/jppg/scope-jppg",
                        element:<PoliticsScope></PoliticsScope>
                    },
                    {
                        path:"/jppg/editorial-board",
                        element:<PoliticsBoard></PoliticsBoard>
                    },
                    {
                        path:"/jppg/archive-jppg",
                        element:<PoliticsArcive></PoliticsArcive>
                    },
                ]
            },

            {
                path:"/jisc",
                element:<CultureLayout></CultureLayout>,
                children:[
                    {
                        path:"/jisc",
                        element:<CultureHome></CultureHome>
                    },
                    {
                        path:"/jisc/current-jisc",
                        element:<CultureIssue></CultureIssue>
                    },
                    {
                        path:"/jisc/scope-jisc",
                        element:<CultureScope></CultureScope>
                    },
                    {
                        path:"/jisc/editorial-board",
                        element:<CultureBoard></CultureBoard>
                    },
                    {
                        path:"/jisc/archive-jisc",
                        element:<CultureArcive></CultureArcive>
                    },
                ]
            },

            {
                path:"/imjcr",
                element:<MultilingualLayout></MultilingualLayout>,
                children:[
                    {
                        path:"/imjcr",
                        element:<MultilingualHome></MultilingualHome>
                    },
                    {
                        path:"/imjcr/current-imjcr",
                        element:<MultilingualIssue></MultilingualIssue>
                    },
                    {
                        path:"/imjcr/scope-imjcr",
                        element:<MultilingualScope></MultilingualScope>
                    },
                    {
                        path:"/imjcr/editorial-board",
                        element:<MultilingualBoard></MultilingualBoard>
                    },
                    {
                        path:"/imjcr/archive-imjcr",
                        element:<MultilingualArcive></MultilingualArcive>
                    },
                ]
            },

            {
                path:"/ijll",
                element:<LanguageLayout></LanguageLayout>,
                children:[
                    {
                        path:"/ijll",
                        element:<LanguageHome></LanguageHome>
                    },
                    {
                        path:"/ijll/current-ijll",
                        element:<LanguageIssue></LanguageIssue>
                    },
                    {
                        path:"/ijll/scope-ijll",
                        element:<LanguageScope></LanguageScope>
                    },
                    {
                        path:"/ijll/editorial-board",
                        element:<LanguageBoard></LanguageBoard>
                    },
                    {
                        path:"/ijll/archive-ijll",
                        element:<LanguageArcive></LanguageArcive>
                    },
                ]
            },

            {
                path:"/jmpp",
                element:<ManagementLayout></ManagementLayout>,
                children:[
                    {
                        path:"/jmpp",
                        element:<ManagementHome></ManagementHome>
                    },
                    {
                        path:"/jmpp/current-jmpp",
                        element:<ManagementIssue></ManagementIssue>
                    },
                    {
                        path:"/jmpp/scope-jmpp",
                        element:<ManagementScope></ManagementScope>
                    },
                    {
                        path:"/jmpp/editorial-board",
                        element:<ManagementBoard></ManagementBoard>
                    },
                    {
                        path:"/jmpp/archive-jmpp",
                        element:<ManagementArcive></ManagementArcive>
                    },
                ]
            },

            {
                path:"/jmm",
                element:<MarketingLayout></MarketingLayout>,
                children:[
                    {
                        path:"/jmm",
                        element:<MarketingHome></MarketingHome>
                    },
                    {
                        path:"/jmm/current-jmm",
                        element:<MarketingIssue></MarketingIssue>
                    },
                    {
                        path:"/jmm/scope-jmm",
                        element:<MarketingScope></MarketingScope>
                    },
                    {
                        path:"/jmm/editorial-board",
                        element:<MarketingBoard></MarketingBoard>
                    },
                    {
                        path:"/jmm/archive-jmm",
                        element:<MarketingArcive></MarketingArcive>
                    },
                ]
            },

            {
                path:"/ijmp",
                element:<MedicineLayout></MedicineLayout>,
                children:[
                    {
                        path:"/ijmp",
                        element:<MedicineHome></MedicineHome>
                    },
                    {
                        path:"/ijmp/current-ijmp",
                        element:<MedicineIssue></MedicineIssue>
                    },
                    {
                        path:"/ijmp/scope-ijmp",
                        element:<MedicineScope></MedicineScope>
                    },
                    {
                        path:"/ijmp/editorial-board",
                        element:<MedicineBoard></MedicineBoard>
                    },
                    {
                        path:"/ijmp/archive-ijmp",
                        element:<MedicineArcive></MedicineArcive>
                    },
                ]
            },

            {
                path:"/jasps",
                element:<PolicyStudiesLayout></PolicyStudiesLayout>,
                children:[
                    {
                        path:"/jasps",
                        element:<PolicyStudiesHome></PolicyStudiesHome>
                    },
                    {
                        path:"/jasps/current-jasps",
                        element:<PolicyStudiesIssue></PolicyStudiesIssue>
                    },
                    {
                        path:"/jasps/scope-jasps",
                        element:<PolicyStudiesScope></PolicyStudiesScope>
                    },
                    {
                        path:"/jasps/editorial-board",
                        element:<PolicyStudiesBoard></PolicyStudiesBoard>
                    },
                    {
                        path:"/jasps/archive-jasps",
                        element:<PolicyStudiesArcive></PolicyStudiesArcive>
                    },
                ]
            },

            {
                path:"/jssw",
                element:<SociologyLayout></SociologyLayout>,
                children:[
                    {
                        path:"/jssw",
                        element:<SociologyHome></SociologyHome>
                    },
                    {
                        path:"/jssw/current-jssw",
                        element:<SociologyIssue></SociologyIssue>
                    },
                    {
                        path:"/jssw/scope-jssw",
                        element:<SociologyScope></SociologyScope>
                    },
                    {
                        path:"/jssw/editorial-board",
                        element:<SociologyBoard></SociologyBoard>
                    },
                    {
                        path:"/jssw/archive-jssw",
                        element:<SociologyArcive></SociologyArcive>
                    },
                ]
            },

            {
                path:"/arms",
                element:<MathematicsLayout></MathematicsLayout>,
                children:[
                    {
                        path:"/arms",
                        element:<MathematicsHome></MathematicsHome>
                    },
                    {
                        path:"/arms/current-arms",
                        element:<MathematicsIssue></MathematicsIssue>
                    },
                    {
                        path:"/arms/scope-arms",
                        element:<MathematicsScope></MathematicsScope>
                    },
                    {
                        path:"/arms/editorial-board",
                        element:<MathematicsBoard></MathematicsBoard>
                    },
                    {
                        path:"/arms/archive-arms",
                        element:<MathematicsArcive></MathematicsArcive>
                    },
                ]
            },

            {
                path:"/jthm",
                element:<TourismLayout></TourismLayout>,
                children:[
                    {
                        path:"/jthm",
                        element:<TourismHome></TourismHome>
                    },
                    {
                        path:"/jthm/current-jthm",
                        element:<TourismIssue></TourismIssue>
                    },
                    {
                        path:"/jthm/scope-jthm",
                        element:<TourismScope></TourismScope>
                    },
                    {
                        path:"/jthm/editorial-board",
                        element:<TourismBoard></TourismBoard>
                    },
                    {
                        path:"/jthm/archive-jthm",
                        element:<TourismArcive></TourismArcive>
                    },
                ]
            },

            {
                path:"/ijpa",
                element:<PhysicsLayout></PhysicsLayout>,
                children:[
                    {
                        path:"/ijpa",
                        element:<PhysicsHome></PhysicsHome>
                    },
                    {
                        path:"/ijpa/current-ijpa",
                        element:<PhysicsIssue></PhysicsIssue>
                    },
                    {
                        path:"/ijpa/scope-ijpa",
                        element:<PhysicsScope></PhysicsScope>
                    },
                    {
                        path:"/ijpa/editorial-board",
                        element:<PhysicsBoard></PhysicsBoard>
                    },
                    {
                        path:"/ijpa/archive-ijpa",
                        element:<PhysicsArcive></PhysicsArcive>
                    },
                ]
            },

            {
                path:"/jpbs",
                element:<PsychologyLayout></PsychologyLayout>,
                children:[
                    {
                        path:"/jpbs",
                        element:<PsychologyHome></PsychologyHome>
                    },
                    {
                        path:"/jpbs/current-jpbs",
                        element:<PsychologyIssue></PsychologyIssue>
                    },
                    {
                        path:"/jpbs/scope-jpbs",
                        element:<PsychologyScope></PsychologyScope>
                    },
                    {
                        path:"/jpbs/editorial-board",
                        element:<PsychologyBoard></PsychologyBoard>
                    },
                    {
                        path:"/jpbs/archive-jpbs",
                        element:<PsychologyArcive></PsychologyArcive>
                    },
                ]
            },

            {
                path:"/aijb",
                element:<BiologyLayout></BiologyLayout>,
                children:[
                    {
                        path:"/aijb",
                        element:<BiologyHome></BiologyHome>
                    },
                    {
                        path:"/aijb/current-aijb",
                        element:<BiologyIssue></BiologyIssue>
                    },
                    {
                        path:"/aijb/scope-aijb",
                        element:<BiologyScope></BiologyScope>
                    },
                    {
                        path:"/aijb/editorial-board",
                        element:<BiologyBoard></BiologyBoard>
                    },
                    {
                        path:"/aijb/archive-aijb",
                        element:<BiologyArcive></BiologyArcive>
                    },
                ]
            },

            {
                path:"/jflcc",
                element:<ForeignLagLayout></ForeignLagLayout>,
                children:[
                    {
                        path:"/jflcc",
                        element:<ForeignLagHome></ForeignLagHome>
                    },
                    {
                        path:"/jflcc/current-jflcc",
                        element:<ForeignLagIssue></ForeignLagIssue>
                    },
                    {
                        path:"/jflcc/scope-jflcc",
                        element:<ForeignLagScope></ForeignLagScope>
                    },
                    {
                        path:"/jflcc/editorial-board",
                        element:<ForeignLagBoard></ForeignLagBoard>
                    },
                    {
                        path:"/jflcc/archive-jflcc",
                        element:<ForeignLagArcive></ForeignLagArcive>
                    },
                ]
            },

            {
                path:"/jmise",
                element:<EcommerceLayout></EcommerceLayout>,
                children:[
                    {
                        path:"/jmise",
                        element:<EcommerceHome></EcommerceHome>
                    },
                    {
                        path:"/jmise/current-jmise",
                        element:<EcommerceIssue></EcommerceIssue>
                    },
                    {
                        path:"/jmise/scope-jmise",
                        element:<EcommerceScope></EcommerceScope>
                    },
                    {
                        path:"/jmise/editorial-board",
                        element:<EcommerceBoard></EcommerceBoard>
                    },
                    {
                        path:"/jmise/archive-jmise",
                        element:<EcommerceArcive></EcommerceArcive>
                    },
                ]
            },

            {
                path:"/rcbr",
                element:<ContemporaryLayout></ContemporaryLayout>,
                children:[
                    {
                        path:"/rcbr",
                        element:<ContemporaryHome></ContemporaryHome>
                    },
                    {
                        path:"/rcbr/current-rcbr",
                        element:<ContemporaryIssue></ContemporaryIssue>
                    },
                    {
                        path:"/rcbr/scope-rcbr",
                        element:<ContemporaryScope></ContemporaryScope>
                    },
                    {
                        path:"/rcbr/editorial-board",
                        element:<ContemporaryBoard></ContemporaryBoard>
                    },
                    {
                        path:"/rcbr/archive-rcbr",
                        element:<ContemporaryArcive></ContemporaryArcive>
                    },
                ]
            },

            {
                path:"/jibe",
                element:<InternationalLayout></InternationalLayout>,
                children:[
                    {
                        path:"/jibe",
                        element:<InternationalHome></InternationalHome>
                    },
                    {
                        path:"/jibe/current-jibe",
                        element:<InternationalIssue></InternationalIssue>
                    },
                    {
                        path:"/jibe/scope-jibe",
                        element:<InternationalScope></InternationalScope>
                    },
                    {
                        path:"/jibe/editorial-board",
                        element:<InternationalBoard></InternationalBoard>
                    },
                    {
                        path:"/jibe/archive-jibe",
                        element:<InternationalArcive></InternationalArcive>
                    },
                ]
            },

            {
                path:"/ijhs",
                element:<HealthLayout></HealthLayout>,
                children:[
                    {
                        path:"/ijhs",
                        element:<HealthHome></HealthHome>
                    },
                    {
                        path:"/ijhs/current-ijhs",
                        element:<HealthIssue></HealthIssue>
                    },
                    {
                        path:"/ijhs/scope-ijhs",
                        element:<HealthScope></HealthScope>
                    },
                    {
                        path:"/ijhs/editorial-board",
                        element:<HealthBoard></HealthBoard>
                    },
                    {
                        path:"/ijhs/archive-ijhs",
                        element:<HealthArcive></HealthArcive>
                    },
                ]
            },

            {
                path:"/rah",
                element:<HumanitiesLayout></HumanitiesLayout>,
                children:[
                    {
                        path:"/rah",
                        element:<HumanitiesHome></HumanitiesHome>
                    },
                    {
                        path:"/rah/current-rah",
                        element:<HumanitiesIssue></HumanitiesIssue>
                    },
                    {
                        path:"/rah/scope-rah",
                        element:<HumanitiesScope></HumanitiesScope>
                    },
                    {
                        path:"/rah/editorial-board",
                        element:<HumanitiesBoard></HumanitiesBoard>
                    },
                    {
                        path:"/rah/archive-rah",
                        element:<HumanitiesArcive></HumanitiesArcive>
                    },
                ]
            },

            {
                path:"/jibf",
                element:<IslamicLayout></IslamicLayout>,
                children:[
                    {
                        path:"/jibf",
                        element:<IslamicHome></IslamicHome>
                    },
                    {
                        path:"/jibf/current-jibf",
                        element:<IslamicIssue></IslamicIssue>
                    },
                    {
                        path:"/jibf/scope-jibf",
                        element:<IslamicScope></IslamicScope>
                    },
                    {
                        path:"/jibf/editorial-board",
                        element:<IslamicBoard></IslamicBoard>
                    },
                    {
                        path:"/jibf/archive-jibf",
                        element:<IslamicArcive></IslamicArcive>
                    },
                ]
            },

            {
                path:"/rjmc",
                element:<JournalismLayout></JournalismLayout>,
                children:[
                    {
                        path:"/rjmc",
                        element:<JournalismHome></JournalismHome>
                    },
                    {
                        path:"/rjmc/current-rjmc",
                        element:<JournalismIssue></JournalismIssue>
                    },
                    {
                        path:"/rjmc/scope-rjmc",
                        element:<JournalismScope></JournalismScope>
                    },
                    {
                        path:"/rjmc/editorial-board",
                        element:<JournalismBoard></JournalismBoard>
                    },
                    {
                        path:"/rjmc/archive-rjmc",
                        element:<JournalismArcive></JournalismArcive>
                    },
                ]
            },

            {
                path:"/jsspi",
                element:<SocialLayout></SocialLayout>,
                children:[
                    {
                        path:"/jsspi",
                        element:<SocialHome></SocialHome> 
                    },
                    {
                        path:"/jsspi/current-jsspi",
                        element:<SocialIssue></SocialIssue>
                    },
                    {
                        path:"/jsspi/scope-jsspi",
                        element:<SocialScope></SocialScope>
                    },
                    {
                        path:"/jsspi/editorial-board",
                        element:<SocialBoard></SocialBoard>
                    },
                    {
                        path:"/jsspi/archive-jsspi",
                        element:<SocialArcive></SocialArcive>
                    },
                ]
            },

            {
                path:"/jns",
                element:<NaturalLayout></NaturalLayout>,
                children:[
                    {
                        path:"/jns",
                        element:<NaturalHome></NaturalHome>
                    },
                    {
                        path:"/jns/current-jns",
                        element:<NaturalIssue></NaturalIssue>
                    },
                    {
                        path:"/jns/scope-jns",
                        element:<NaturalScope></NaturalScope>
                    },
                    {
                        path:"/jns/editorial-board",
                        element:<NaturalBoard></NaturalBoard>
                    },
                    {
                        path:"/jns/archive-jns",
                        element:<NaturalArcive></NaturalArcive>
                    },
                ]
            },

            {
                path:"/ijpt",
                element:<PhilosophyLayout></PhilosophyLayout>,
                children:[
                    {
                        path:"/ijpt",
                        element:<PhilosophyHome></PhilosophyHome>
                    },
                    {
                        path:"/ijpt/current-ijpt",
                        element:<PhilosophyIssue></PhilosophyIssue>
                    },
                    {
                        path:"/ijpt/scope-ijpt",
                        element:<PhilosophyScope></PhilosophyScope>
                    },
                    {
                        path:"/ijpt/editorial-board",
                        element:<PhilosophyBoard></PhilosophyBoard>
                    },
                    {
                        path:"/ijpt/archive-ijpt",
                        element:<PhilosophyArcive></PhilosophyArcive>
                    },
                ]
            },

            {
                path:"/ijbss",
                element:<BusinessGeneralLayout></BusinessGeneralLayout>,
                children:[
                    {
                        path:"/ijbss",
                        element:<BusinessGeneralHome></BusinessGeneralHome>
                    },
                    {
                        path:"/ijbss/current-ijbss",
                        element:<BusinessGeneralIssue></BusinessGeneralIssue>
                    },
                    {
                        path:"/ijbss/scope-ijbss",
                        element:<BusinessGeneralScope></BusinessGeneralScope>
                    },
                    {
                        path:"/ijbss/editorial-board",
                        element:<BusinessGeneralBoard></BusinessGeneralBoard>
                    },
                    {
                        path:"/ijbss/archive-ijbss",
                        element:<BusinessGeneralArcive></BusinessGeneralArcive>
                    },
                ]
            },

            {
                path:"/ijhss",
                element:<HumanitiesGeneralLayout></HumanitiesGeneralLayout>,
                children:[
                    {
                        path:"/ijhss",
                        element:<HumanitiesGeneralHome></HumanitiesGeneralHome>
                    },
                    {
                        path:"/ijhss/current-ijhss",
                        element:<HumanitiesGeneralIssue></HumanitiesGeneralIssue>
                    },
                    {
                        path:"/ijhss/scope-ijhss",
                        element:<HumanitiesGeneralScope></HumanitiesGeneralScope>
                    },
                    {
                        path:"/ijhss/editorial-board",
                        element:<HumanitiesGeneralBoard></HumanitiesGeneralBoard>
                    },
                    {
                        path:"/ijhss/archive-ijhss",
                        element:<HumanitiesGeneralArcive></HumanitiesGeneralArcive>
                    },
                ]
            },

            {
                path:"/ijast",
                element:<TechnologyLayout></TechnologyLayout>,
                children:[
                    {
                        path:"/ijast",
                        element:<TechnologyHome></TechnologyHome>
                    },
                    {
                        path:"/ijast/current-ijast",
                        element:<TechnologyIssue></TechnologyIssue>
                    },
                    {
                        path:"/ijast/scope-ijast",
                        element:<TechnologyScope></TechnologyScope>
                    },
                    {
                        path:"/ijast/editorial-board",
                        element:<TechnologyBoard></TechnologyBoard>
                    },
                    {
                        path:"/ijast/archive-ijast",
                        element:<TechnologyArcive></TechnologyArcive>
                    },
                ]
            },

            {
                path:"/aijcr",
                element:<ContemporaryGeneralLayout></ContemporaryGeneralLayout>,
                children:[
                    {
                        path:"/aijcr",
                        element:<ContemporaryGeneralHome></ContemporaryGeneralHome>
                    },
                    {
                        path:"/aijcr/current-aijcr",
                        element:<ContemporaryGeneralIssue></ContemporaryGeneralIssue>
                    },
                    {
                        path:"/aijcr/scope-aijcr",
                        element:<ContemporaryGeneralScope></ContemporaryGeneralScope>
                    },
                    {
                        path:"/aijcr/editorial-board",
                        element:<ContemporaryGeneralBoard></ContemporaryGeneralBoard>
                    },
                    {
                        path:"/aijcr/archive-aijcr",
                        element:<ContemporaryGeneralArcive></ContemporaryGeneralArcive>
                    },
                ]
            },

            {
                path:"/ijbht",
                element:<BUTLayout></BUTLayout>,
                children:[
                    {
                        path:"/ijbht",
                        element:<BUTHome></BUTHome>
                    },
                    {
                        path:"/ijbht/current-ijbht",
                        element:<BUTIssue></BUTIssue>
                    },
                    {
                        path:"/ijbht/scope-ijbht",
                        element:<BUTScope></BUTScope>
                    },
                    {
                        path:"/ijbht/editorial-board",
                        element:<BUTBoard></BUTBoard>
                    },
                    {
                        path:"/ijbht/archive-ijbht",
                        element:<BUTArcive></BUTArcive>
                    },
                ]
            },

            {
                path:"/aijss",
                element:<SocialGeneralLayout></SocialGeneralLayout>,
                children:[
                    {
                        path:"/aijss",
                        element:<SocialGeneralHome></SocialGeneralHome>
                    },
                    {
                        path:"/aijss/current-aijss",
                        element:<SocialGeneralIssue></SocialGeneralIssue>
                    },
                    {
                        path:"/aijss/scope-aijss",
                        element:<SocialGeneralScope></SocialGeneralScope>
                    },
                    {
                        path:"/aijss/editorial-board",
                        element:<SocialGeneralBoard></SocialGeneralBoard>
                    },
                    {
                        path:"/aijss/archive-aijss",
                        element:<SocialGeneralArcive></SocialGeneralArcive>
                    },
                ]
            },

            {
                path:"/jbep",
                element:<EconomicPolicyLayout></EconomicPolicyLayout>,
                children:[
                    {
                        path:"/jbep",
                        element:<EconomicPolicyHome></EconomicPolicyHome>
                    },
                    {
                        path:"/jbep/current-jbep",
                        element:<EconomicPolicyIssue></EconomicPolicyIssue>
                    },
                    {
                        path:"/jbep/scope-jbep",
                        element:<EconomicPolicyScope></EconomicPolicyScope>
                    },
                    {
                        path:"/jbep/editorial-board",
                        element:<EconomicPolicyBoard></EconomicPolicyBoard>
                    },
                    {
                        path:"/jbep/archive-jbep",
                        element:<EconomicPolicyArcive></EconomicPolicyArcive>
                    },
                ]
            },

            {
                path:"/jesp",
                element:<EducationPolicyLayout></EducationPolicyLayout>,
                children:[
                    {
                        path:"/jesp",
                        element:<EducationPolicyHome></EducationPolicyHome>
                    },
                    {
                        path:"/jesp/current-jesp",
                        element:<EducationPolicyIssue></EducationPolicyIssue>
                    },
                    {
                        path:"/jesp/scope-jesp",
                        element:<EducationPolicyScope></EducationPolicyScope>
                    },
                    {
                        path:"/jesp/editorial-board",
                        element:<EducationPolicyBoard></EducationPolicyBoard>
                    },
                    {
                        path:"/jesp/archive-jesp",
                        element:<EducationPolicyArcive></EducationPolicyArcive>
                    },
                ]
            },

            {
                path:"/jals",
                element:<LifeLayout></LifeLayout>,
                children:[
                    {
                        path:"/jals",
                        element:<LifeHome></LifeHome>
                    },
                    {
                        path:"/jals/current-jals",
                        element:<LifeIssue></LifeIssue>
                    },
                    {
                        path:"/jals/scope-jals",
                        element:<LifeScope></LifeScope>
                    },
                    {
                        path:"/jals/editorial-board",
                        element:<LifeBoard></LifeBoard>
                    },
                    {
                        path:"/jals/archive-jals",
                        element:<LifeArcive></LifeArcive>
                    },
                ]
            },

            {
                path:"/ijllnet",
                element:<LinguisticsCpiLayout></LinguisticsCpiLayout>,
                children:[
                    {
                        path:"/ijllnet",
                        element:<LinguisticsCpiHome></LinguisticsCpiHome>
                    },
                    {
                        path:"/ijllnet/current-ijllnet",
                        element:<LinguisticsCpiIssue></LinguisticsCpiIssue>
                    },
                    {
                        path:"/ijllnet/scope-ijllnet",
                        element:<LinguisticsCpiScope></LinguisticsCpiScope>
                    },
                    {
                        path:"/ijllnet/editorial-board",
                        element:<LinguisticsCpiBoard></LinguisticsCpiBoard>
                    },
                    {
                        path:"/ijllnet/archive-ijllnet",
                        element:<LinguisticsCpiArcive></LinguisticsCpiArcive>
                    },
                ]
            },

            {
                path:"/jgpc",
                element:<PeaceLayout></PeaceLayout>,
                children:[
                    {
                        path:"/jgpc",
                        element:<PeaceHome></PeaceHome>
                    },
                    {
                        path:"/jgpc/current-jgpc",
                        element:<PeaceIssue></PeaceIssue>
                    },
                    {
                        path:"/jgpc/scope-jgpc",
                        element:<PeaceScope></PeaceScope>
                    },
                    {
                        path:"/jgpc/editorial-board",
                        element:<PeaceBoard></PeaceBoard>
                    },
                    {
                        path:"/jgpc/archive-jgpc",
                        element:<PeaceArcive></PeaceArcive>
                    },
                ]
            },

            {
                path:"/smq",
                element:<StrategicLayout></StrategicLayout>,
                children:[
                    {
                        path:"/smq",
                        element:<StrategicHome></StrategicHome>
                    },
                    {
                        path:"/smq/current-smq",
                        element:<StrategicIssue></StrategicIssue>
                    },
                    {
                        path:"/smq/scope-smq",
                        element:<StrategicScope></StrategicScope>
                    },
                    {
                        path:"/smq/editorial-board",
                        element:<StrategicBoard></StrategicBoard>
                    },
                    {
                        path:"/smq/archive-smq",
                        element:<StrategicArcive></StrategicArcive>
                    },
                ]
            },

            {
                path:"/jlis",
                element:<LibraryLayout></LibraryLayout>,
                children:[
                    {
                        path:"/jlis",
                        element:<LibraryHome></LibraryHome> 
                    },
                    {
                        path:"/jlis/current-jlis",
                        element:<LibraryIssue></LibraryIssue>
                    },
                    {
                        path:"/jlis/scope-jlis",
                        element:<LibraryScope></LibraryScope>
                    },
                    {
                        path:"/jlis/editorial-board",
                        element:<LibraryBoard></LibraryBoard>
                    },
                    {
                        path:"/jlis/archive-jlis",
                        element:<LibraryArcive></LibraryArcive>
                    },
                ]
            },

            {
                path:"/ssr",
                element:<ScienceReviewLayout></ScienceReviewLayout>,
                children:[
                    {
                        path:"/ssr",
                        element:<ScienceReviewHome></ScienceReviewHome>
                    },
                    {
                        path:"/ssr/current-ssr",
                        element:<ScienceReviewIssue></ScienceReviewIssue>
                    },
                    {
                        path:"/ssr/scope-ssr",
                        element:<ScienceReviewScope></ScienceReviewScope>
                    },
                    {
                        path:"/ssr/editorial-board",
                        element:<ScienceReviewBoard></ScienceReviewBoard>
                    },
                    {
                        path:"/ssr/archive-ssr",
                        element:<ScienceReviewArcive></ScienceReviewArcive>
                    },
                ]
            },

            {
                path:"/brr",
                element:<BusinessReviewsLayout></BusinessReviewsLayout>,
                children:[
                    {
                        path:"/brr",
                        element:<BusinessReviewsHome></BusinessReviewsHome>
                    },
                    {
                        path:"/brr/current-brr",
                        element:<BusinessReviewsIssue></BusinessReviewsIssue>
                    },
                    {
                        path:"/brr/scope-brr",
                        element:<BusinessReviewsScope></BusinessReviewsScope>
                    },
                    {
                        path:"/brr/editorial-board",
                        element:<BusinessReviewsBoard></BusinessReviewsBoard>
                    },
                    {
                        path:"/brr/archive-brr",
                        element:<BusinessReviewsArcive></BusinessReviewsArcive>
                    },
                ]
            }
           
            
        ],

    },

    {
        path:"/login",
        element:<LogIn></LogIn>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    }
]);