import {expect, beforeEach, test} from "vitest"
import {render, screen, cleanup} from "../../../../test-utils";
import ArticleList from "./ArticleList";

beforeEach(()=>{
    cleanup();
})

test("it should render ArticleList Component", ()=>{
    const dataSourceType = "";
    const data = [];
    render(<ArticleList dataSourceType={dataSourceType} data={data}/>);
    const ArticleListElement = screen.getByTestId("data-ArticleList");
    expect(ArticleListElement).toBeInTheDocument();
});

test("it should render 'n' ArticleCard components given 'n' elements in data (articles) array", ()=>{
    const dataSourceType = 1;
    const data = [{
        id: "1",
        url: "some url",
        published_date: "",
        updated: "",
        byline: "",
        title: "some title",
        abstract: ""
    },{
        id: "2",
        url: "some url",
        published_date: "",
        updated: "",
        byline: "",
        title: "some title",
        abstract: ""
    }];
    render(<ArticleList dataSourceType={dataSourceType} data={data}/>);
    const ArticleListElement = screen.getByTestId("data-ArticleList");

    for(let i = 0; i < data.length; i++){
        const ArticleCardElement = screen.getByTestId(data[i].id);
        expect(ArticleListElement).toContainElement(ArticleCardElement);
    }
});
