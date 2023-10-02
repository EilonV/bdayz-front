import down from '../assets/imgs/down.svg'
export const EmptyBdayz = () => {
    return <section className="no-bdayz-wrapper flex column align-center justify-center">
        <div className="no-bdayz flex column align-center justify-center">
            <h2>נראה שאין לנו עדיין למי לחגוג...</h2>
            <p>אין מה לדאוג, לחצו על כפתור הוסף ממש כאן למטה
                <br />
                הוסיפו ילד/ילדת יום הולדת ותאריך וזה הכל!
            </p>
            <img src={down} alt="arrow down icon" />
        </div>
    </section>
}