function Mahasiswa({ nama, nrp, prodi }) {
    return (
    <div>
        <h3>Data Mahasiswa</h3>
        <ul>
            <li>Nama: {nama}</li>
            <li>Nrp: {nrp}</li>
            <li>Prodi: {prodi}</li>
        </ul>
    </div>
 );
}
export default Mahasiswa;