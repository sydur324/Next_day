import { Outlet } from "react-router-dom";
import PhilosophyNav from "../Journals/Philosophy/PhilosophyNav/PhilosophyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PhilosophyDetails from "../Journals/Philosophy/PhilosophyDetails/PhilosophyDetails";


const PhilosophyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Philosophy and Theology"}></PageTitle>
            <PhilosophyDetails></PhilosophyDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <PhilosophyNav></PhilosophyNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default PhilosophyLayout;