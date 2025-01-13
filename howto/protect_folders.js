const storedHashes = {
    "howto": {
        salt: "s0m3_V3ry_L0ng_R4nd0m_Str1ng_12345",
        hashes: [
            "6ab518cde746fdb9fa73f31e3a690031d905da4f5f7cb07094dec16a5c194d15", // Password 1 for "howto"
            "7c2e508578607ef10fda8ef9214b1267d8a5a9016e2a4446de08bb82dd8e2fc9"  // Password 2 for "howto"
        ]
    },
    "mynotes": {
        salt: "s0m3_V3ry_L0ng_R4nd0m_Str1ng_12345",
        hashes: [
            "9810d8d68f186f9e551215fcba623ac45bb9ed52c1c13907ca3b4f6c787834a2" // Password 1 for "mynotes"
        ]
    }
    // Add more folders and passwords as needed
};

const hashPassword = async (password, salt) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
};

const verifyPassword = async (folder) => {
    const folderData = storedHashes[folder];
    if (!folderData) {
        alert("Invalid folder configuration.");
        return;
    }

    const password = prompt(`Enter password for ${folder}:`);
    if (!password) {
        alert("Access denied. No password entered.");
        return;
    }

    const hashedInput = await hashPassword(password, folderData.salt);

    if (folderData.hashes.includes(hashedInput)) {
        document.getElementById('protected-content').style.display = 'block';
    } else {
        // Increment invalid attempt counter
        invalidAttempts++;

        if (invalidAttempts >= maxAttempts) {
            // Redirect to error page after max attempts
            window.location.href = '/error/404.html';
        } else {
            alert(`Incorrect password. ${maxAttempts - invalidAttempts} attempt(s) remaining.`);
        }
    }
};

// Call verifyPassword with the appropriate folder name
document.addEventListener('DOMContentLoaded', () => {
    const folderName = "howto"; // Change this dynamically if needed
    verifyPassword(folderName);
});
