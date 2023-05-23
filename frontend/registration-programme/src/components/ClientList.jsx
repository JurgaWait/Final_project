

export const ClientList = () => { 
    return (
        <div className="client-list-container">
            <h2>Dalyvių sąrašas</h2>
        <form className="client-list-form">
            <label htmlFor="name">vardas:</label>
            <input
            type="name" placeholder="vardas" id="name" name="name" />
            <label htmlFor="surname">pavardė:</label>
            <input
            type="surname" placeholder="pavardė" id="surname" name="surname" />
            <label htmlFor="email">elektroninis paštas:</label>
            <input
            type="email" placeholder="įrašykite el. pašto adresą" id="email" name="email" />
            <label htmlFor="phone">telefono numeris::</label>
            <input
            type="phone" placeholder="+370" id="phone" name="phone" />
            <button className="form-btn" type="submit">Ištrinti</button>
        </form>
    </div>
    )
}
