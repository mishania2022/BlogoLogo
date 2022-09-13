import { useEffect } from "react";
import { ClockLoader } from "react-spinners";
import { fetchArticles } from "../../store/features/Articles/articlesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArticles } from "../../store/selectors/articleSelectors";
import { InputValues } from "../../types";
import { Article } from "../Article/Article";
import { StyledArticlesList } from "./styles";

export const ArticlesList = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error, articles } = useAppSelector(getArticles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if (isLoading) {
        return <ClockLoader />;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <StyledArticlesList>
            {articles.map(({ title, imageUrl, publishedAt }: InputValues) => {
                return (
                    <Article
                        title={title}
                        imageUrl={imageUrl}
                        publishedAt={publishedAt}
                    />
                );
            })}
        </StyledArticlesList>
    );
};
