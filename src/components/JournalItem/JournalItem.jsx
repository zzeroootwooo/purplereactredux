import "./JournalItem.css";

function JournalItem({ title, text, date }) {
    const formatedDate = new Intl.DateTimeFormat("ua-UA").format(date);

    return (
        <div className="journal-item">
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__date">{formatedDate}</div>
                <div className="journal-item__text">{text}</div>
            </h2>
        </div>
    );
}

export default JournalItem;
