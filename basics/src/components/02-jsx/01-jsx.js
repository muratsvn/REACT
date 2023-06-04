const Jsx1 = () => {
    const name = "John Doe";

    const user = {
        name: "Jonathan",
        age: 30,
    };

    return (
        <> {/* React.Fragment ifadesidir. En üstte parent olarak kullanılabilir */}
            <p>
                Butun JSX kodlari bir element icinde olmalidir.
                {/* ben bir yorum satiriyim */}
            </p>
            <p>
                Merhaba {name}{/* süslü parantez kullanmak js ifadesi kullanmaktır */}
            </p>
            <h2>KULLANICI BILGILERI</h2>
            <p>
                Kullanici Adi: {user.name}
            </p>
            <p>
                Yasi: {user.age}
            </p>
        </>
    )
};

export default Jsx1;