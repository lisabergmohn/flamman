/* export links and popups to fires.js */
export function popUpspots(map, anchor) {

    /* västra långvattnet*/
    let vastraLang = L.marker([57.695381, 12.069011]).addTo(map);
    vastraLang.bindPopup("<b><a href='" + anchor.href + "Rastplats-Vastra-Langvattnet' target='_blank'>Västra Långvattnet</a></b>").openPopup();


    /* lilla Delsjön raststuga*/
    let lillaDelsjon = L.marker([57.685418, 12.082285]).addTo(map);
    lillaDelsjon.bindPopup("<b><a href='" + anchor.href + "Lilla-Delsjon-raststuga' target='_blank'>Lilla Delsjön raststuga</a></b>").openPopup();

    /* Kindboviksvägen */
    let kindboviksvagen = L.marker([57.680468, 12.064895]).addTo(map);
    kindboviksvagen.bindPopup("<b><a href='" + anchor.href + "Kindboviksvagen' target='_blank'>Kindboviksvägen</a></b>").openPopup();


    /* Lägre Kåsjön Vindskydd */
    let kasjon = L.marker([57.702480, 12.110000]).addTo(map);
    kasjon.bindPopup("<b><a href='" + anchor.href + "Lagre-Kasjon-Vindskydd' target='_blank'>Lägre Kåsjön Vindskydd</a></b>").openPopup();

    /* Gött läge Getryggen Vindskydd */
    let getryggen = L.marker([57.705642, 12.068675]).addTo(map);
    getryggen.bindPopup("<b><a href='" + anchor.href + "Gott-lage-Getryggen-Vindskydd' target='_blank'>Gött läge Getryggen Vindskydd</b>").openPopup();

    /* Rastplats Kåsjön runt */
    let rastplatkasjon = L.marker([57.703630, 12.106239]).addTo(map);
    rastplatkasjon.bindPopup("<b><a href='" + anchor.href + "Rastplats-Kasjon-runt' target='_blank'>Rastplats Kasjön runt</b>").openPopup();

    /* Delsjöområdet två */
    let delsjoomradetTva = L.marker([57.712052, 12.054686]).addTo(map);
    delsjoomradetTva.bindPopup("<b><a href='" + anchor.href + "Delsjoomradet-2' target='_blank'>Delsjöområdet</b>").openPopup();

    /* Härlanda Tjärn */
    let haralandatjarn = L.marker([57.706639, 12.052243]).addTo(map);
    haralandatjarn.bindPopup("<b><a href='" + anchor.href + "Harlanda-tjarn' target='_blank'>Härlanda Tjärn</a></b>").openPopup();

    /* Lackarebäcks Långvattens östra grillplats */
    let lackarebacksOstra = L.marker([57.669814, 12.039536]).addTo(map);
    lackarebacksOstra.bindPopup("<b><a href='" + anchor.href + "Lackarebacks-Langvattens-ostra-grillplats' target='_blank'>Lackarebäcks Långvattens östra grillplats</a></b>").openPopup();

    /* Delsjöområdet sex */
    let delsjoomradetSex = L.marker([57.685936, 12.040985]).addTo(map);
    delsjoomradetSex.bindPopup("<b><a href='" + anchor.href + "Delsjoomradet-6' target='_blank'>Delsjöområdet</a></b>").openPopup();

    /* Rådasjöns naturreservat */
    let radasjon = L.marker([57.669764, 12.084976]).addTo(map);
    radasjon.bindPopup("<b><a href='" + anchor.href + "Radasjons-naturreservat' target='_blank'>Rådasjöns naturreservat</a></b>").openPopup();

    /* Sagoparken Säteriet, Mölnlycke */
    let sagoparken = L.marker([57.663701, 12.099309]).addTo(map);
    sagoparken.bindPopup("<b><a href='" + anchor.href + "Sagoparken-Sateriet-Molnlycke' target='_blank'>Sagoparken Säteriet Mölnlycke</a></b>").openPopup();

    /*  Änggårdsbergen */
    let anggardsbergen = L.marker([57.671680, 11.958722]).addTo(map);
    anggardsbergen.bindPopup("<b><a href='" + anchor.href + "Anggardsbergen' target='_blank'>Änggardsbergen</a></b>").openPopup();


    /* Gunnebo Stensjöns grillplats */
    let gunnebo = L.marker([57.845576, 12.102853]).addTo(map);
    gunnebo.bindPopup("<b><a href='" + anchor.href + "Gunnebo-Stensjons-grillplats' target='_blank'>Gunnebo Stensjöns grillplats</a></b>").openPopup();

    /* Herkules Dammens grillplats */
    let herkules = L.marker([57.651301, 12.073721]).addTo(map);
    herkules.bindPopup("<b><a href='" + anchor.href + "Herkules-Dammens-grillplats' target='_blank'>Herkules Dammens grillplats</a></b>").openPopup();

};
