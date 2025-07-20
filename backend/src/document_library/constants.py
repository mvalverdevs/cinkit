from django.utils.translation import gettext as _

LICENSE0 = "sense-llicencia"
LICENSE1 = "copyright"
LICENSE2 = "copyleft"
LICENSE3 = "cc-by"
LICENSE4 = "cc-by-nc"
LICENSE5 = "by-nc-sa"
LICENSE6 = "by-nc-nd"
LICENSE7 = "by-sa"
LICENSE8 = "by-nd"
LICENSE9 = "publica"

CH_TYPE_LICENSE = (  # https://creativecommons.org/licenses/
    (LICENSE0, _("Unlicensed")),
    (LICENSE1, _("Copyright")),
    (LICENSE2, _("Copyleft")),
    (LICENSE3, _("Recognition")),
    (LICENSE4, _("Attribution – NonCommercial")),
    (LICENSE5, _("Attribution - NonCommercial - ShareAlike")),
    (LICENSE6, _("Attribution - NonCommercial - NoDerivatives")),
    (LICENSE7, _("Attribution - ShareAlike")),
    (LICENSE8, _("Attribution - NoDerivatives")),
    (LICENSE9, _("Public")),
)
