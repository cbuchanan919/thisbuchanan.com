export default function Book() {
    return (
        <div>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About This Site</h1>
            <h2 className="text-xl font-bold">Built by a massage therapist who loves technology—and your comfort.</h2>
            <p className="pt-10">I’ve always believed that healing starts with a calm mind and a relaxed body. As a massage therapist, my goal is to create space for you to unwind, recharge, and feel your best. That’s why I built this site: to share my passion for holistic wellness and make it easy for you to connect with me.</p>
            <p>But here’s the secret: I’m also a tech enthusiast who loves saving money—and doing things *right*. This site is a blend of both worlds: </p>
                <ul className="list-disc pl-10 pt-5 space-y-2">
                    <li>**Built from scratch** using Next.js and Tailwind CSS for a clean, responsive experience. </li>
                    <li>Hosted on a Proxmox (Linux) server with a firewall to keep things secure and efficient. </li>
                    <li>To Do: Use CI/CD to automatically push updates to the site when the code has been updated.</li>
                </ul>
            <p className="pt-5">It’s not just about the tech—it’s about creating a trustworthy, user-friendly space that supports your wellness journey. Whether you’re looking for tips on self-care or ready to book your next session, I hope this site feels like a quiet moment of peace. Let’s work together to bring balance to your life—one massage at a time. 🌿💆‍♀️</p>
        </div>
    )
}