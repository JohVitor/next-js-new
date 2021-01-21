function Tempo () {

    const dynamicDate = newDate();
    const dynamicDateString = dynamicDate.toGMTString()


    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )


}

export default Tempo