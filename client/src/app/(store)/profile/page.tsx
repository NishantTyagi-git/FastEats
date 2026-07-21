import ProfileHeader from "@/components/store/profile/ProfileHeader";
import ProfileStats from "@/components/store/profile/ProfileStats";
import ProfileMenu from "@/components/store/profile/ProfileMenu";
import LogoutCard from "@/components/store/profile/LogoutCard";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#0b0b0b] pt-28 pb-20">
            <div className="mx-auto max-w-5xl px-6">
                <ProfileHeader />

                <ProfileStats />

                <ProfileMenu />

                <LogoutCard />
            </div>
        </main>
    );
}