import React from 'react';
import Apples, { Bananas1, Orange } from './components/01-my-house';
import Jsx1 from './components/02-jsx/01-jsx';
import Jsx2 from './components/02-jsx/02-jsx';
import Jsx3 from './components/02-jsx/03-jsx';
import Jsx4 from './components/02-jsx/04-jsx';
import InlineStyling from './components/03-styles/01-inline-styling';
import InternalStyling from './components/03-styles/02-internal-styling';
import ExternalStyling from './components/03-styles/03-external-styling';
import ExternalModuleStyling from './components/03-styles/04-external-module-styling';
import SassScss from './components/03-styles/05-sass.scss';
import DijitalSaatUygulamasi1 from './components/04-dijital-saat-uygulamasi1/dijital-saat-uygulamasi1';
import Greetings from './components/05-props/01-greetings';
import Products from './components/05-props/05-products';
import ProductCard from './components/05-props/06-product-card';
import DijitalSaatUygulamasi2 from './components/06-dijital-saat-uygulamasi2/dijital-saat-uygulamasi2';
import Image from './components/07-images/01-image';
import ImageGallery from './components/07-images/02-image-gallery';
import ProfileCard from './components/08-profile-card/profile-card';
import BootstrapKlasikYontem from './components/09-bootstrap/01-bootstrap-klasik-yontem';
import BootstrapModernYontem from './components/09-bootstrap/02-bootstrap-modern-yontem';
import "./assets/scss/style.scss";
import ReactIcons from './components/10-icons/01-react-icons';
import MaterialIcons from './components/10-icons/02-material-icons';
import Gallery from './components/100-ornek/gallery';
import ProfileCardOrnek from './components/101-ornek/profile-card-ornek';
import Events from './components/11-events/events';

const profileCardData = {
    name: "Emir",
    location: "New York",
    image: "person4.jpg",
    statistics: [
        { title: "Likes", stat: 145 },
        { title: "Photos", stat: 7 },
        { title: "Following", stat: 329 },
    ]
};

export default function App() {
    return (
        <>
            <Apples />
            <br />
            <Bananas1 />
            <br />
            <Orange />
            <br />
            <Jsx1 />
            <br />
            <Jsx2 />
            <br />
            <Jsx3 />
            <br />
            <Jsx4 />
            <br />
            <InlineStyling />
            <br />
            <InternalStyling />
            <br />
            <ExternalStyling />
            <br />
            <ExternalModuleStyling />
            <br />
            <SassScss />
            <br />
            <DijitalSaatUygulamasi1 />
            <br />
            <Greetings />
            <br />
            <Products />
            <br />
            <DijitalSaatUygulamasi2 textColor="white" bgColor="red" />
            <br />
            <Image />
            <br />
            <ImageGallery />
            <br />
            <ProfileCard
                name="Walker"
                location="Nashville, Tennesse"
                image="profile-card.jpg"
                statistics={[
                    { title: "Shot", stat: 2 },
                    { title: "Follower", stat: 234 },
                    { title: "Following", stat: 327 },
                ]}
            />
            <ProfileCard
                name="Kyle"
                location="London"
                image="profile.jpg"
                statistics={[
                    { title: "Likes", stat: 50 },
                    { title: "Photos", stat: 12 },
                    { title: "Following", stat: 10 },
                ]}
            />
            <br />
            <ProfileCard {...profileCardData} />
            <br />
            <BootstrapKlasikYontem/>
            <br />
            <BootstrapModernYontem/>
            <br />
            <ReactIcons/>
            <br />
            <MaterialIcons/>
            <br />
            <Gallery/>
            <br />
            <ProfileCardOrnek avatar="person4.jpg" name="Ali" location="New York" shot="145" followers="329" following='33'/>
            <br />
            <Events/>
        </>
    )
};










