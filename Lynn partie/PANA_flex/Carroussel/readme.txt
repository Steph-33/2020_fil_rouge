[-class-] -> carroussel d'images--------------------------------
Url     : http://codes-sources.commentcamarche.net/source/50874-class-carroussel-d-imagesAuteur  : TheWeasel47Date    : 08/08/2013
Licence :
=========

Ce document intitulé « [-class-] -> carroussel d'images » issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis à disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fixées par la licence, tant que cette note
apparaît clairement.

Description :
=============

Voila deux petites classes pour pr&eacute;senter plusieurs photos en carroussel,
 Ce script n'utilise pas de flash et est relativement facile &agrave; utiliser e
t mettre en place.
<br /><a name='source-exemple'></a><h2> Source / Exemple : <
/h2>
<br /><pre class='code' data-mode='basic'>
&lt;html&gt;
	&lt;head&gt;

		&lt;title&gt;Carroussel en Rotation&lt;/title&gt;
		&lt;SCRIPT type=&quot;tex
t/javascript&quot; src=&quot;JS/Carroussel_rotation.js&quot;&gt;&lt;/script&gt;

		&lt;SCRIPT type=&quot;text/javascript&quot;&gt;
			
			var Caroussel;
			f
unction GenererCarrousel(){
				
				var Car_Image_Sources=new Array(
					&q
uot;Img/tfile_menu_pic1.jpg&quot;,
					&quot;Img/tfile_menu_pic2.jpg&quot;,
	
				&quot;Img/tfile_menu_pic3.jpg&quot;,
					&quot;Img/tfile_menu_pic4.jpg&quo
t;,
					&quot;Img/tfile_menu_pic5.jpg&quot;,
					&quot;Img/tfile_menu_pic6.j
pg&quot;
				);
				Caroussel=new Carroussel_Rotation(document.getElementById(
'Carousel_Menu'),Car_Image_Sources);
				Caroussel.RedimentionnerCalque(0); //A
juste le calque à la taille maximal  de l'image la plus grande
				Caroussel.De
finir_Vitesse(100); //Vitesse de rotation des photos (par défault 50ms)
				Car
oussel.Vitesse_Changement_Images(2); //Vitesse de modifications de la taille des
 photos (par défault 5pixels)
				// Caroussel.Definir_Vitesse_Fondu(0.01); //V
itesse du fondu
			}
		&lt;/script&gt;

	&lt;/head&gt;
	&lt;body onload=&qu
ot;javascript:GenererCarrousel();&quot;&gt;
		&lt;center&gt;
		&lt;h1&gt;Carro
ussel en rotation&lt;/h1&gt;
		
		&lt;div id=&quot;Carousel_Menu&quot; style=&
quot;position:relative; width: 600px;height: 300px; padding-bottom: 10px;&quot;&
gt;&amp;nbsp;&lt;/div&gt;
		&lt;/center&gt;
	&lt;/body&gt;
&lt;/html&gt;
</p
re>
<br /><a name='conclusion'></a><h2> Conclusion : </h2>
<br />Signalez moi
 vos optimisation que je pourrai apporter, bugs et autres incompatibilit&eacute;
s.
