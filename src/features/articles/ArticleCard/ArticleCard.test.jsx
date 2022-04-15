import {describe, expect, it, beforeEach} from "vitest"
import {render, screen, cleanup} from "../../../../test-utils";
import ArticleCard from "./ArticleCard";

beforeEach(() => {
    cleanup();
})

describe("Basic", () => {
    it("should render ArticleCard Component", () => {
        const data = {
            id: "1",
            url: "some url",
            published_date: "",
            updated: "",
            byline: "",
            title: "some title",
            abstract: ""
        }
        render(<ArticleCard data={data}/>);
        const ArticleCardElement = screen.getByTestId(data.id);
        expect(ArticleCardElement).toBeInTheDocument();
    });

});

describe("ArticleCard Component should ONLY render if ALL mandatory information are provided", () => {
    it("should NOT render ArticleCard Component when URL is missing", () => {
        const data = {
            id: "1",
            url: "",
            published_date: "",
            updated: "",
            byline: "",
            title: "some title",
            abstract: ""
        }
        render(<ArticleCard data={data}/>);
        expect(() => screen.getByTestId(data.id)).toThrow('Unable to find an element')
    })

    it("should NOT render ArticleCard Component when title is missing", () => {
        const data = {
            id: "1",
            url: "some url",
            published_date: "",
            updated: "",
            byline: "",
            title: "",
            abstract: ""
        }
        render(<ArticleCard data={data}/>);
        expect(() => screen.getByTestId(data.id)).toThrow('Unable to find an element')
    })
})
