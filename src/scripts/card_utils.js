function setVisibility(visible) {
    const visibility = visible ? "visible" : "hidden";

    btnform.style.visibility = visibility;
    card.style.visibility = visibility;

    btnver.style.visibility = visible ? "hidden" : "visible";
    btncard.style.visibility = visible ? "hidden" : "visible";
    form.style.visibility = visible ? "hidden" : "visible";
}

export {setVisibility}