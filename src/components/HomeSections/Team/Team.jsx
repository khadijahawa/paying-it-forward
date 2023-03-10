import { useTranslation } from 'react-i18next';
import Card from './Card';

function Team() {
    const { t } = useTranslation(['common']);
    const Memebers = [
        {
            id: 1,
            name: 'Maher Alaqil',
            department: 'Project Supervisor',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02SZNX217V-d0711e4bb9c8-512',
        },
        {
            id: 2,
            name: 'Kutay Kağan Özen',
            department: 'Lead Engineer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U032E6F3KNY-1d2d343493bf-512',
        },
        {
            id: 6,
            name: 'Göksu Alkan',
            department: 'Web Developer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02SZETTP1V-c422a48cbb0c-512',
        },
        {
            id: 7,
            name: 'Mustafa Durmaz',
            department: 'Web Developer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02T7CZD8J2-10780d1f297d-512',
        },
        {
            id: 3,
            name: 'Khadija Hawa',
            department: 'Web Developer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02TGC9JKS8-3d89cad21cb6-512',
        },
        {
            id: 4,
            name: 'Şebnem Görmüş',
            department: 'Web Developer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02TGCCHPU4-3120bdbf7c87-512',
        },
        {
            id: 5,
            name: 'Abuobaida Abdi',
            department: 'Web Developer',
            image: 'https://ca.slack-edge.com/T02ST1JH0CE-U02TE4JQQ4T-3245dfa48692-512',
        },
    ];
    return (
        <div className="mt-3">
            <div>
                <h1 className=" mt-14 text-xl font-bold ">{t('TheTeam')}</h1>
            </div>
            <div className="py-12 flex flex-row md:gap-14 flex-wrap items-center justify-center">
                {Memebers.map((person) => (
                    <div key={person.id}>
                        <div className=" mt-14 px-8">
                            <Card {...person} className="p-6" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
