// Replace with your Web App URL from Step 1
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbJZ2QCPQFm5zPlsFJXIgErqaFI-3dJ0c1SBVS-sVsIVkJAhkCgLEunMmgxcznLy6UhA/exec';

// --- 1. THREE.JS 3D BACKGROUND ANIMATION ---
function init3D() {
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 3D Grid Floor
    const gridHelper = new THREE.GridHelper(60, 40, 0x00f0ff, 0xff003c);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Dynamic 3D Floating Particles
    const geometry = new THREE.BufferGeometry();
    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 40;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.1, color: 0xfcee0a });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        gridHelper.position.z += 0.05;
        if (gridHelper.position.z > 1.5) gridHelper.position.z = 0;
        
        points.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize 3D Visuals
init3D();

// --- 2. GOOGLE SHEETS FORM SUBMISSION ---
const form = document.getElementById('attendanceForm');
const submitBtn = document.getElementById('submitBtn');
const statusMsg = document.getElementById('statusMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'UPLOADING_DATA...';
    statusMsg.textContent = '';
    statusMsg.className = 'status-msg';

    const payload = {
        studentId: document.getElementById('studentId').value,
        fullName: document.getElementById('fullName').value,
        department: document.getElementById('department').value,
        status: document.querySelector('input[name="status"]:checked').value
    };

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Standard bypass for Google Apps Script CORS restrictions
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        statusMsg.textContent = '// SUCCESS: DATA TRANSMITTED TO MAINFRAME';
        statusMsg.classList.add('success');
        form.reset();
    } catch (err) {
        statusMsg.textContent = '// ERROR: TRANSMISSION FAILED';
        statusMsg.classList.add('error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = 'INITIALIZE_LOG';
    }
});