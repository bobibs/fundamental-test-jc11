// Constructor user
class User {
	constructor(username, password, role) {
		(this.username = username), (this.password = password), (this.role = role);
	}
}

// Constructor activity
class Activity {
	constructor(kegiatan, hari, poster) {
		(this.kegiatan = kegiatan), (this.hari = hari), (this.poster = poster);
	}
}

// Array user
const user = [
	new User('guest', 12345, 'user'),
	new User('admin', 12345, 'admin')
];

// Array activity
const activity = [new Activity('Upacara', 'Senin', 'Ini gambar')];

// Function display activity user
const userSide = a => {
	let output = '';
	a.forEach((val, index) => {
		output += `
            <tr>
                <td>${index + 1}</td>
                <td>${val.kegiatan}</td>
                <td>${val.hari}</td>
                <td>${val.poster}</td>
                <td></td>
            </tr>
        `;
	});

	// Tampilkan di table body
	document.getElementById('tableData-body').innerHTML = output;
};

// Function display activity admin
const adminSide = a => {
	let output = '';
	a.forEach((val, index) => {
		output += `
            <tr>
                <td>${index + 1}</td>
                <td>${val.kegiatan}</td>
                <td>${val.hari}</td>
                <td><img src=${val.image} height='100px'/></td>
                <td>
                    <button onclick="btnDelete(${index})">Delete</button>
                    <button onclick="btnEdit(${index})">Edit</button>
                </td>
            </tr>
        `;
	});

	// Tampilkan di table body
	document.getElementById('tableData-body').innerHTML = output;
};

// Function login
document.getElementById('btnLogin').addEventListener('click', () => {
	// Get data
	const username = document.getElementById('userName').value;
	const password = document.getElementById('userPass').value;

	// Cek data
	user.forEach(val => {
		if (username == val.username && password == val.password) {
			if (val.role == 'user') {
				userSide(activity);
				document.getElementById(
					'successMssg'
				).innerHTML = `Selamat datang ${val.username} <br /> <br /> <button type="button" id="btnLogout" onclick="btnLogout()">Logout</button> `;
			}

			if (val.role == 'admin') {
				adminSide(activity);
				document.getElementById(
					'successMssg'
				).innerHTML = `Selamat datang ${val.username} <br /> <br /> <button type="button" id="btnLogout" onclick="btnLogout()">Logout</button>`;
			}
		}
	});
});

// Function Logout
btnLogout = () => {
	document.getElementById('tableData-body').innerHTML = '';
	document.getElementById('successMssg').innerHTML = '';
};

// Function Delete
btnDelete = index => {
	activity.splice(index, 1);
	adminSide(activity);
};
