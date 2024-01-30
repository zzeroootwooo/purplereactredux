import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import "./App.css";

function App() {
    const data = [
        {
            title: "Подготовка к обновлению курсов",
            text: "Горные походы открывают удивительные природные ландшафты",
            date: new Date(),
        },
        {
            title: "AAAA",
            text: "Pisun",
            date: new Date(),
        },
    ];

    return (
        <>
            <h1>Header</h1>
            <p>Text</p>
            <Button />
            <JournalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
            />
            <JournalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
            />
        </>
    );
}

export default App;
